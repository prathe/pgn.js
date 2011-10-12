var assert = require('assert');
var pgn = require('../../lib/main');

assert.deepEqual(pgn.parse(''), {});
assert.deepEqual(pgn.parse(' '), {});
assert.deepEqual(pgn.parse('  '), {});
assert.deepEqual(pgn.parse('\t'), {});
assert.deepEqual(pgn.parse('\t\t'), {});
assert.deepEqual(pgn.parse('\t '), {});
assert.deepEqual(pgn.parse('\n'), {});
assert.deepEqual(pgn.parse('\n\n'), {});
assert.deepEqual(pgn.parse(' \n \t \n '), {});

assert.deepEqual(pgn.parse('.'), {});
assert.deepEqual(pgn.parse('...'), {});
assert.deepEqual(pgn.parse(' . '), {});
assert.deepEqual(pgn.parse(' ... '), {});

assert.deepEqual(pgn.parse('1'), {});
assert.deepEqual(pgn.parse('10'), {});
assert.deepEqual(pgn.parse('100'), {});
assert.deepEqual(pgn.parse('1.'), {});
assert.deepEqual(pgn.parse('1 .'), {});
assert.deepEqual(pgn.parse('1..'), {});
assert.deepEqual(pgn.parse('1...'), {});
assert.deepEqual(pgn.parse('1 ... '), {});

assert.deepEqual(pgn.parse('[Event"F/S Return Match"]'), {tagPairs:{'Event':"F/S Return Match"}});
assert.deepEqual(pgn.parse('[Event "F/S Return Match"]'), {tagPairs:{'Event':"F/S Return Match"}});
assert.deepEqual(pgn.parse('[Event "F/S \\"Return Match\\""]'), {tagPairs:{'Event':"F/S \\\"Return Match\\\""}});
assert.deepEqual(pgn.parse('[Event"F/S Return Match"][AnyKey"Any value"]'), {tagPairs:{'Event':"F/S Return Match",'AnyKey':"Any value"}});
assert.deepEqual(pgn.parse('[Event "F/S Return Match"][AnyKey "Any value"]'), {tagPairs:{'Event':"F/S Return Match",'AnyKey':"Any value"}});
assert.deepEqual(pgn.parse('[Event "F/S Return Match"] [AnyKey "Any value"]'), {tagPairs:{'Event':"F/S Return Match",'AnyKey':"Any value"}});
assert.deepEqual(pgn.parse('[ Event "F/S Return Match" ] [ AnyKey "Any value" ]'), {tagPairs:{'Event':"F/S Return Match",'AnyKey':"Any value"}});
assert.deepEqual(pgn.parse('[Event"F/S Return Match"] 1.'), {tagPairs:{'Event':"F/S Return Match"}});

assert.deepEqual(pgn.parse('*'), {movetext:{terminationMarker:"*"}});
assert.deepEqual(pgn.parse('1-0'), {movetext:{terminationMarker:"1-0"}});
assert.deepEqual(pgn.parse('0-1'), {movetext:{terminationMarker:"0-1"}});
assert.deepEqual(pgn.parse('1/2-1/2'), {movetext:{terminationMarker:"1/2-1/2"}});
assert.deepEqual(pgn.parse(' * '), {movetext:{terminationMarker:"*"}});
assert.deepEqual(pgn.parse('1.*'), {movetext:{terminationMarker:"*"}});
assert.deepEqual(pgn.parse('1. *'), {movetext:{terminationMarker:"*"}});

assert.deepEqual(pgn.parse('e4'), {movetext:{moves:[{san:"e4"}]}});
assert.deepEqual(pgn.parse(' e4 '), {movetext:{moves:[{san:"e4"}]}});
assert.deepEqual(pgn.parse('1 e4'), {movetext:{moves:[{san:"e4"}]}});
assert.deepEqual(pgn.parse('1. e4'), {movetext:{moves:[{san:"e4"}]}});
assert.deepEqual(pgn.parse('1.  e4'), {movetext:{moves:[{san:"e4"}]}});assert.deepEqual(pgn.parse('e4 e5'), {movetext:{moves:[{san:"e4"},{san:"e5"}]}});

assert.deepEqual(pgn.parse('e4 e5'), {movetext:{moves:[{san:"e4"},{san:"e5"}]}});
assert.deepEqual(pgn.parse('1. e4 e5'), {movetext:{moves:[{san:"e4"},{san:"e5"}]}});
assert.deepEqual(pgn.parse('1. e4  e5'), {movetext:{moves:[{san:"e4"},{san:"e5"}]}});assert.deepEqual(pgn.parse('e4 e5 Nf3'), {movetext:{moves:[{san:"e4"},{san:"e5"},{san:"Nf3"}]}});
assert.deepEqual(pgn.parse('1.  e4 e5'), {movetext:{moves:[{san:"e4"},{san:"e5"}]}});assert.deepEqual(pgn.parse('e4 e5 Nf3'), {movetext:{moves:[{san:"e4"},{san:"e5"},{san:"Nf3"}]}});
assert.deepEqual(pgn.parse('1. e4 1... e5'), {movetext:{moves:[{san:"e4"},{san:"e5"}]}});
assert.deepEqual(pgn.parse('1. e4\n1... e5'), {movetext:{moves:[{san:"e4"},{san:"e5"}]}});
assert.deepEqual(pgn.parse('1. e4 e5 2. Nf3'), {movetext:{moves:[{san:"e4"},{san:"e5"},{san:"Nf3"}]}});

assert.deepEqual(pgn.parse('e4$1'), {movetext:{moves:[{san:"e4",nag:["$1"]}]}});
assert.deepEqual(pgn.parse('e4 $1'), {movetext:{moves:[{san:"e4",nag:["$1"]}]}});
assert.deepEqual(pgn.parse('e4 $1 $2'), {movetext:{moves:[{san:"e4",nag:["$1","$2"]}]}});
assert.deepEqual(pgn.parse('e4 $1 e5 $2'), {movetext:{moves:[{san:"e4",nag:["$1"]},{san:"e5",nag:["$2"]}]}});

assert.deepEqual(pgn.parse('e4+'), {movetext:{moves:[{san:"e4+"}]}});
assert.deepEqual(pgn.parse('e4#'), {movetext:{moves:[{san:"e4#"}]}});

assert.deepEqual(pgn.parse('e4!!'), {movetext:{moves:[{san:"e4!!"}]}});
assert.deepEqual(pgn.parse('e4??'), {movetext:{moves:[{san:"e4??"}]}});
assert.deepEqual(pgn.parse('e4!?'), {movetext:{moves:[{san:"e4!?"}]}});
assert.deepEqual(pgn.parse('e4?!'), {movetext:{moves:[{san:"e4?!"}]}});
assert.deepEqual(pgn.parse('e4!'), {movetext:{moves:[{san:"e4!"}]}});
assert.deepEqual(pgn.parse('e4?'), {movetext:{moves:[{san:"e4?"}]}});

assert.deepEqual(pgn.parse('e4+!!'), {movetext:{moves:[{san:"e4+!!"}]}});
assert.deepEqual(pgn.parse('e4+??'), {movetext:{moves:[{san:"e4+??"}]}});
assert.deepEqual(pgn.parse('e4+!?'), {movetext:{moves:[{san:"e4+!?"}]}});
assert.deepEqual(pgn.parse('e4+?!'), {movetext:{moves:[{san:"e4+?!"}]}});
assert.deepEqual(pgn.parse('e4+!'), {movetext:{moves:[{san:"e4+!"}]}});
assert.deepEqual(pgn.parse('e4+?'), {movetext:{moves:[{san:"e4+?"}]}});

assert.deepEqual(pgn.parse('e4+='), {movetext:{moves:[{san:"e4",sac:['+=']}]}});
assert.deepEqual(pgn.parse('e4 +='), {movetext:{moves:[{san:"e4",sac:['+=']}]}});
assert.deepEqual(pgn.parse('e4! +='), {movetext:{moves:[{san:"e4!",sac:['+=']}]}});
assert.deepEqual(pgn.parse('e4 += //'), {movetext:{moves:[{san:"e4",sac:['+=','//']}]}});
assert.deepEqual(pgn.parse('e4 += // e5'), {movetext:{moves:[{san:"e4",sac:['+=','//']},{san:"e5"}]}});

assert.deepEqual(pgn.parse('e4*'), {movetext:{moves:[{san:"e4"}],terminationMarker:"*"}});
assert.deepEqual(pgn.parse('e4 *'), {movetext:{moves:[{san:"e4"}],terminationMarker:"*"}});
assert.deepEqual(pgn.parse('e4 1-0'), {movetext:{moves:[{san:"e4"}],terminationMarker:"1-0"}});
assert.deepEqual(pgn.parse('e4 0-1'), {movetext:{moves:[{san:"e4"}],terminationMarker:"0-1"}});
assert.deepEqual(pgn.parse('e4 1/2-1/2'), {movetext:{moves:[{san:"e4"}],terminationMarker:"1/2-1/2"}});assert.deepEqual(pgn.parse('e4 e5 *'), {movetext:{moves:[{san:"e4"},{san:"e5"}],terminationMarker:"*"}});
assert.deepEqual(pgn.parse('e4 e5 Nf3 *'), {movetext:{moves:[{san:"e4"},{san:"e5"},{san:"Nf3"}],terminationMarker:"*"}});

assert.deepEqual(pgn.parse('[Event"F/S Return Match"] *'), {tagPairs:{'Event':"F/S Return Match"},movetext:{terminationMarker:"*"}});

assert.deepEqual(pgn.parse('[Event"F/S Return Match"] 1. e4'), {tagPairs:{'Event':"F/S Return Match"},movetext:{moves:[{san:"e4"}]}});

assert.deepEqual(pgn.parse('[Event"F/S Return Match"] 1. e4 *'), {tagPairs:{'Event':"F/S Return Match"},movetext:{moves:[{san:"e4"}],terminationMarker:"*"}});
assert.deepEqual(pgn.parse("e4 {King's pawn opening}"), {movetext:{moves:[{san:"e4",comments:["King's pawn opening"]}]}});

assert.deepEqual(pgn.parse("e4 {}"), {movetext:{moves:[{san:"e4"}]}});
assert.deepEqual(pgn.parse("e4 { }"), {movetext:{moves:[{san:"e4"}]}});
assert.deepEqual(pgn.parse("e4 { . }"), {movetext:{moves:[{san:"e4",comments:["."]}]}});
assert.deepEqual(pgn.parse("e4 {King's pawn opening}"), {movetext:{moves:[{san:"e4",comments:["King's pawn opening"]}]}});
assert.deepEqual(pgn.parse("e4 {Annotations by Anonymous} {King's pawn opening}"), {movetext:{moves:[{san:"e4",comments:["Annotations by Anonymous", "King's pawn opening"]}]}});
assert.deepEqual(pgn.parse("e4 {\\}}"), {movetext:{moves:[{san:"e4",comments:["\\}"]}]}});

assert.deepEqual(pgn.parse("e4 ;"), {movetext:{moves:[{san:"e4"}]}});
assert.deepEqual(pgn.parse("e4 ;King's pawn opening"), {movetext:{moves:[{san:"e4",comments:["King's pawn opening"]}]}});
assert.deepEqual(pgn.parse("e4 ;King's pawn opening\n"), {movetext:{moves:[{san:"e4",comments:["King's pawn opening"]}]}});
assert.deepEqual(pgn.parse("e4 ;Annotations by Anonymous\n{King's pawn opening}"), {movetext:{moves:[{san:"e4",comments:["Annotations by Anonymous", "King's pawn opening"]}]}});
// Here the second comment is considered a software comment, then ignored.
assert.deepEqual(pgn.parse("e4 ;Annotations by Anonymous\n;King's pawn opening"), {movetext:{moves:[{san:"e4",comments:["Annotations by Anonymous"]}]}});

assert.deepEqual(pgn.parse('1 e4 (Nf3)'), {movetext:{moves:[{san:"e4",rav:[[{san:"Nf3"}]]}]}});
assert.deepEqual(pgn.parse('1. e4 e5 (1... c5)'), {movetext:{moves:[{san:"e4"},{san:"e5",rav:[[{san:"c5"}]]}]}});
assert.deepEqual(pgn.parse('1. e4 e5 (1... c5 2. Nf3) 2. Nf3'), {movetext:{moves:[{san:"e4"},{san:"e5",rav:[[{san:"c5"},{san:"Nf3"}]]},{san:"Nf3"}]}});
assert.deepEqual(pgn.parse('1. e4 e5 (1... c5 2. Nf3) (1...d4) 2. Nf3'), {movetext:{moves:[{san:"e4"},{san:"e5",rav:[[{san:"c5"},{san:"Nf3"}],[{san:"d4"}]]},{san:"Nf3"}]}});

assert.deepEqual(pgn.parse('1. e4 e5 {e5 comment} (1... c5)'), {movetext:{moves:[{san:"e4"},{san:"e5",comments:["e5 comment"],rav:[[{san:"c5"}]]}]}});
assert.deepEqual(pgn.parse('1. e4 e5 (1... c5) {e5 comment}'), {movetext:{moves:[{san:"e4"},{san:"e5",comments:["e5 comment"],rav:[[{san:"c5"}]]}]}});
assert.deepEqual(pgn.parse('1. e4 e5 (1... c5 {Sicilian Defence})'), {movetext:{moves:[{san:"e4"},{san:"e5",rav:[[{san:"c5",comments:["Sicilian Defence"]}]]}]}});
assert.deepEqual(pgn.parse('1. e4 e5 (1... c5 ;Sicilian Defence\n)'), {movetext:{moves:[{san:"e4"},{san:"e5",rav:[[{san:"c5",comments:["Sicilian Defence"]}]]}]}});
