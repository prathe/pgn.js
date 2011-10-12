/* text, command, operand, partialtext */

%start p

%%

p
    : comments EOF
        { return $1; }
    ;

comments
    : comment
        { $$ = [$1]; }
    | comments comment
        { $$ = $1.concat([$2]); }
    |
        {{ $$ = {}; }}
    ;

comment
    : COMMAND operands
        {{ var command = {}; command[$1] = $2; $$ = command; }}
    | text
        { $$ = $1; }
    ;

operands
    : OPERAND
        { $$ = [$1]; }
    | operands ',' OPERAND
        { $$ = $1.concat([$3]); }
    ;

text
    : PARTIALTEXT
        { $$ = $1; }
    | text PARTIALTEXT
        { $$ = $1 + $2; }
    ;