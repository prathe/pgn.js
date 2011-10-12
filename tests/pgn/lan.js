var assert = require('assert');
var pgn = require('../../lib/main');

// Pawn and pieces
['P','N','B','R','Q'].forEach(function (piece) {
  ['a','b','c','d','e','f','g','h'].forEach(function (file) {
    ['1','2','3','4','5','6','7','8'].forEach(function (rank) {
      ['-','x'].forEach(function (separator) {
        assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank),{movetext:{moves:[{san:piece+file+rank+separator+file+rank}]}});
        ['+','#'].forEach(function (suffix) {
          assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank+suffix),{movetext:{moves:[{san:piece+file+rank+separator+file+rank+suffix}]}});
          ['!','?','!!','!?','?!','??'].forEach(function (suffixAnnotation) {
            assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank+suffix+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+separator+file+rank+suffix+suffixAnnotation}]}});
          });
        });
        ['!','?','!!','!?','?!','??'].forEach(function (suffixAnnotation) {
          assert.deepEqual(pgn.parse(file+rank+separator+file+rank+suffixAnnotation),{movetext:{moves:[{san:file+rank+separator+file+rank+suffixAnnotation}]}});
        });
      });
    });
  });
});

// Promotions
['P',''].forEach(function (piece) {
  ['a','b','c','d','e','f','g','h'].forEach(function (file) {
    ['1','8'].forEach(function (rank) {
      ['N','B','R','Q'].forEach(function (promotion) {
        ['-','x'].forEach(function (separator) {
          assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank+'='+promotion),{movetext:{moves:[{san:piece+file+rank+separator+file+rank+'='+promotion}]}});
          assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank+promotion),{movetext:{moves:[{san:piece+file+rank+separator+file+rank+promotion}]}});
          ['+','#'].forEach(function (suffix) {
            assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank+'='+promotion+suffix),{movetext:{moves:[{san:piece+file+rank+separator+file+rank+'='+promotion+suffix}]}});
            assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank+promotion+suffix),{movetext:{moves:[{san:piece+file+rank+separator+file+rank+promotion+suffix}]}});
            ['!','?','!!','!?','?!','??'].forEach(function (suffixAnnotation) {
              assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank+'='+promotion+suffix+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+separator+file+rank+'='+promotion+suffix+suffixAnnotation}]}});
              assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank+promotion+suffix+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+separator+file+rank+promotion+suffix+suffixAnnotation}]}});
            });
          });
          ['!','?','!!','!?','?!','??'].forEach(function (suffixAnnotation) {
            assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank+'='+promotion+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+separator+file+rank+'='+promotion+suffixAnnotation}]}});
            assert.deepEqual(pgn.parse(piece+file+rank+separator+file+rank+promotion+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+separator+file+rank+promotion+suffixAnnotation}]}});
          });
        });
      });
    });
  });
});
