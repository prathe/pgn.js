var assert = require('assert');
var pgn = require('../../lib/main');

// Castle
assert.deepEqual(pgn.parse('O-O'), {movetext:{moves:[{san:"O-O"}]}});
assert.deepEqual(pgn.parse('O-O-O'), {movetext:{moves:[{san:"O-O-O"}]}});

// Pawn
['a','b','c','d','e','f','g','h'].forEach(function (file) {
  ['1','2','3','4','5','6','7','8'].forEach(function (rank) {
    assert.deepEqual(pgn.parse(file+rank),{movetext:{moves:[{san:file+rank}]}});
    assert.deepEqual(pgn.parse(file+'x'+file+rank),{movetext:{moves:[{san:file+'x'+file+rank}]}});
    ['+','#'].forEach(function (suffix) {
      assert.deepEqual(pgn.parse(file+rank+suffix),{movetext:{moves:[{san:file+rank+suffix}]}});
      assert.deepEqual(pgn.parse(file+'x'+file+rank+suffix),{movetext:{moves:[{san:file+'x'+file+rank+suffix}]}});
      ['!','?','!!','!?','?!','??'].forEach(function (suffixAnnotation) {
        assert.deepEqual(pgn.parse(file+rank+suffix+suffixAnnotation),{movetext:{moves:[{san:file+rank+suffix+suffixAnnotation}]}});
        assert.deepEqual(pgn.parse(file+'x'+file+rank+suffix+suffixAnnotation),{movetext:{moves:[{san:file+'x'+file+rank+suffix+suffixAnnotation}]}});
      });
    });
    ['!','?','!!','!?','?!','??'].forEach(function (suffixAnnotation) {
      assert.deepEqual(pgn.parse(file+rank+suffixAnnotation),{movetext:{moves:[{san:file+rank+suffixAnnotation}]}});
      assert.deepEqual(pgn.parse(file+'x'+file+rank+suffixAnnotation),{movetext:{moves:[{san:file+'x'+file+rank+suffixAnnotation}]}});
    });
  });
});

// Promotions
['a','b','c','d','e','f','g','h'].forEach(function (file) {
  ['1','8'].forEach(function (rank) {
    ['N','B','R','Q'].forEach(function (promotion) {
      assert.deepEqual(pgn.parse(file+rank+'='+promotion),{movetext:{moves:[{san:file+rank+'='+promotion}]}});
      assert.deepEqual(pgn.parse(file+rank+promotion),{movetext:{moves:[{san:file+rank+promotion}]}});
      assert.deepEqual(pgn.parse(file+'x'+file+rank+'='+promotion),{movetext:{moves:[{san:file+'x'+file+rank+'='+promotion}]}});
      assert.deepEqual(pgn.parse(file+'x'+file+rank+promotion),{movetext:{moves:[{san:file+'x'+file+rank+promotion}]}});
      ['+','#'].forEach(function (suffix) {
        assert.deepEqual(pgn.parse(file+rank+'='+promotion+suffix),{movetext:{moves:[{san:file+rank+'='+promotion+suffix}]}});
        assert.deepEqual(pgn.parse(file+rank+promotion+suffix),{movetext:{moves:[{san:file+rank+promotion+suffix}]}});
        assert.deepEqual(pgn.parse(file+'x'+file+rank+'='+promotion+suffix),{movetext:{moves:[{san:file+'x'+file+rank+'='+promotion+suffix}]}});
        assert.deepEqual(pgn.parse(file+'x'+file+rank+promotion+suffix),{movetext:{moves:[{san:file+'x'+file+rank+promotion+suffix}]}});
        ['!','?','!!','!?','?!','??'].forEach(function (suffixAnnotation) {
          assert.deepEqual(pgn.parse(file+rank+'='+promotion+suffix+suffixAnnotation),{movetext:{moves:[{san:file+rank+'='+promotion+suffix+suffixAnnotation}]}});
          assert.deepEqual(pgn.parse(file+rank+promotion+suffix+suffixAnnotation),{movetext:{moves:[{san:file+rank+promotion+suffix+suffixAnnotation}]}});
          assert.deepEqual(pgn.parse(file+'x'+file+rank+'='+promotion+suffix+suffixAnnotation),{movetext:{moves:[{san:file+'x'+file+rank+'='+promotion+suffix+suffixAnnotation}]}});
          assert.deepEqual(pgn.parse(file+'x'+file+rank+promotion+suffix+suffixAnnotation),{movetext:{moves:[{san:file+'x'+file+rank+promotion+suffix+suffixAnnotation}]}});
        });
      });
      ['!','?','!!','!?','?!','??'].forEach(function (suffixAnnotation) {
        assert.deepEqual(pgn.parse(file+rank+'='+promotion+suffixAnnotation),{movetext:{moves:[{san:file+rank+'='+promotion+suffixAnnotation}]}});
        assert.deepEqual(pgn.parse(file+rank+promotion+suffixAnnotation),{movetext:{moves:[{san:file+rank+promotion+suffixAnnotation}]}});
        assert.deepEqual(pgn.parse(file+'x'+file+rank+'='+promotion+suffixAnnotation),{movetext:{moves:[{san:file+'x'+file+rank+'='+promotion+suffixAnnotation}]}});
        assert.deepEqual(pgn.parse(file+'x'+file+rank+promotion+suffixAnnotation),{movetext:{moves:[{san:file+'x'+file+rank+promotion+suffixAnnotation }]}});
      });
    });
  });
});

// Pieces
['P','N','B','R','Q'].forEach(function (piece) {
  ['a','b','c','d','e','f','g','h'].forEach(function (file) {
    ['1','2','3','4','5','6','7','8'].forEach(function (rank) {
      assert.deepEqual(pgn.parse(piece+file+rank),{movetext:{moves:[{san:piece+file+rank}]}});
      assert.deepEqual(pgn.parse(piece+file+file+rank),{movetext:{moves:[{san:piece+file+file+rank}]}});
      assert.deepEqual(pgn.parse(piece+file+rank+file+rank),{movetext:{moves:[{san:piece+file+rank+file+rank}]}});
      assert.deepEqual(pgn.parse(piece+'x'+file+rank),{movetext:{moves:[{san:piece+'x'+file+rank}]}});
      assert.deepEqual(pgn.parse(piece+file+'x'+file+rank),{movetext:{moves:[{san:piece+file+'x'+file+rank}]}});
      assert.deepEqual(pgn.parse(piece+file+rank+'x'+file+rank),{movetext:{moves:[{san:piece+file+rank+'x'+file+rank}]}});
      ['+','#'].forEach(function (suffix) {
        assert.deepEqual(pgn.parse(piece+file+rank+suffix),{movetext:{moves:[{san:piece+file+rank+suffix}]}});
        assert.deepEqual(pgn.parse(piece+file+file+rank+suffix),{movetext:{moves:[{san:piece+file+file+rank+suffix}]}});
        assert.deepEqual(pgn.parse(piece+file+rank+file+rank+suffix),{movetext:{moves:[{san:piece+file+rank+file+rank+suffix}]}});
        assert.deepEqual(pgn.parse(piece+'x'+file+rank+suffix),{movetext:{moves:[{san:piece+'x'+file+rank+suffix}]}});
        assert.deepEqual(pgn.parse(piece+file+'x'+file+rank+suffix),{movetext:{moves:[{san:piece+file+'x'+file+rank+suffix}]}});
        assert.deepEqual(pgn.parse(piece+file+rank+'x'+file+rank+suffix),{movetext:{moves:[{san:piece+file+rank+'x'+file+rank+suffix}]}});
        ['!','?','!!','!?','?!','??'].forEach(function (suffixAnnotation) {
          assert.deepEqual(pgn.parse(piece+file+rank+suffix+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+suffix+suffixAnnotation}]}});
          assert.deepEqual(pgn.parse(piece+file+file+rank+suffix+suffixAnnotation),{movetext:{moves:[{san:piece+file+file+rank+suffix+suffixAnnotation}]}});
          assert.deepEqual(pgn.parse(piece+file+rank+file+rank+suffix+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+file+rank+suffix+suffixAnnotation}]}});
          assert.deepEqual(pgn.parse(piece+'x'+file+rank+suffix+suffixAnnotation),{movetext:{moves:[{san:piece+'x'+file+rank+suffix+suffixAnnotation}]}});
          assert.deepEqual(pgn.parse(piece+file+'x'+file+rank+suffix+suffixAnnotation),{movetext:{moves:[{san:piece+file+'x'+file+rank+suffix+suffixAnnotation}]}});
          assert.deepEqual(pgn.parse(piece+file+rank+'x'+file+rank+suffix+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+'x'+file+rank+suffix+suffixAnnotation}]}});
        });
      });
      ['!','?','!!','!?','?!','??'].forEach(function (suffixAnnotation) {
        assert.deepEqual(pgn.parse(piece+file+rank+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+suffixAnnotation}]}});
        assert.deepEqual(pgn.parse(piece+file+file+rank+suffixAnnotation),{movetext:{moves:[{san:piece+file+file+rank+suffixAnnotation}]}});
        assert.deepEqual(pgn.parse(piece+file+rank+file+rank+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+file+rank+suffixAnnotation}]}});
        assert.deepEqual(pgn.parse(piece+'x'+file+rank+suffixAnnotation),{movetext:{moves:[{san:piece+'x'+file+rank+suffixAnnotation}]}});
        assert.deepEqual(pgn.parse(piece+file+'x'+file+rank+suffixAnnotation),{movetext:{moves:[{san:piece+file+'x'+file+rank+suffixAnnotation}]}});
        assert.deepEqual(pgn.parse(piece+file+rank+'x'+file+rank+suffixAnnotation),{movetext:{moves:[{san:piece+file+rank+'x'+file+rank+suffixAnnotation}]}});
      });
    });
  });
});
