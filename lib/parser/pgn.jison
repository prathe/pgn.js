%start p

%%

p
    : pgn EOF
        { return $1; }
    ;

pgn
    : tagpairs movetext
        {{ $$ = {tagPairs: $1, movetext: $2}; }}
    | tagpairs
        {{ $$ = {tagPairs: $1}; }}
    | movetext
        {{ $$ = {movetext: $1}; }}
    |
        {{ $$ = {}; }}
    ;

tagpairs
    : '[' SYMBOL STRING ']'
        {{ var tagpair = {}; tagpair[$2] = $3; $$ = tagpair; }}
    | tagpairs '[' SYMBOL STRING ']'
        { $1[$3] = $4; $$ = $1; }
    ;

movetext
    : moves terminationmarker
        {{ $$ = {moves: $1, terminationMarker: $2}; }}
    | moves
        {{ $$ = {moves: $1}; }}
    | terminationmarker
        {{ $$ = {terminationMarker: $1}; }}
    ;

terminationmarker
    : TERMINATIONMARKER
        { $$ = $1; }
    ;

moves
    : move
        { $$ = [$1]; }
    | moves move
        { $$ = $1.concat($2); }
    ;

move
    : san options
        {{ var options = $2; options.san = $1; $$ = options; }}
    | san
        {{ $$ = {san: $1}; }}
    ;

san
    : SAN SUFFIX
        { $$ = $1 + $2; }
    | SAN
        { $$ = $1; }
    ;

options
    : option
        { $$ = $1; }
    | options option
        { $$ = yy.mergeAndConcatenate($1, $2); }
    ;

option
    : COMMENT
        {{ $$ = {comments: [$1]}; }}
    | NAG
        {{ $$ = {nag: [$1]}; }}
    | SAC
        {{ $$ = {sac: [$1]}; }}
    | '(' moves ')'
        {{ $$ = {rav: [$2]}; }}
    ;
