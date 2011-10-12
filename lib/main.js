require.def(function(require, exports, module) {
  var pgnParser = require("./parser/pgn").parser;
  var commentParser = require("./parser/comment").parser;

  var hash;

  exports.parse = function (input) {
    // First pass: strip software comments
    input = input.replace(/^;.*$/gm, '');

    // Second pass: parse pgn (with comments as string)
    hash = pgnParser.parse(input);

    // Third pass: parse the commands in the comments
    if (hash.movetext) {
      walkPlies(hash.movetext.moves || [], function (ply) {
        if (ply.comments) {
          var comments = [];
          ply.comments.forEach(function (comment) {
            comments = comments.concat(commentParser.parse(comment));
          });
          ply.comments = comments;
        }
      });
    }

    return hash;
  };

  exports.walkPlies = function (callback) {
    if (hash && hash.movetext) {
      walkPlies(hash.movetext.moves || [], callback);
    }
  };

  // Parser shared scope
  pgnParser.yy = {
    mergeAndConcatenate: function (dest, source) {
      for (var k in source) {
        if (dest[k] instanceof Array) {
          dest[k] = dest[k].concat(source[k]);
        } else {
          dest[k] = source[k];
        }
      }
      return dest;
    }
  };

  commentParser.yy = {command: false};

  // Helpers
  function walkPlies (moves, callback) {
    moves.forEach(function (move) {
      callback.call(null, move);
      if (move.rav) {
        move.rav.forEach(function (rav) {
          walkPlies(rav, callback);
        });
      }
    });
  }

});