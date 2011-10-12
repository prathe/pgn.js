require.def(function(require, exports, module) {

  function run () {
    require('../tests/pgn/base');
    require('../tests/pgn/comment');
    require('../tests/pgn/san');
    require('../tests/pgn/lan');
    require('../tests/pgn/sac');
  }

  exports.run = run;
  run();
});