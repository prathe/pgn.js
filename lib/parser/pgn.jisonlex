%{ /*
    SAC symbol # is not supported because # is used for checkmate as a SAN SUFFIX.
    Some weird suffix such as #!!,#??,#!?,#?!,#!,#? is supported even if it does not make any sense to annotate a checkmate.
*/
%}

%%

\s+                             {/* skip whitespace */}
";"[^\r\n]*                     {
                                    yytext = yytext.substr( 1, yytext.length - 1 );
                                    yytext.replace(/\s+$/,'');
                                    if (yytext != '') return "COMMENT";
                                }
"{"("\\".|[^}])*"}"             %{
                                    yytext = yytext.substr( 1, yytext.length - 2 );
                                    yytext = yytext.replace(/^\s+/,'');
                                    yytext = yytext.replace(/\s+$/,'');
                                    if (yytext != '') return "COMMENT";
                                %}
("1-0"|"0-1"|"1/2-1/2"|"*")     { return "TERMINATIONMARKER"; }
[0-9]+"."*                      {/* skip move numbers */}
"."+                            {/* skip move numbers */}

("O-O-O"|"O-O")("!!"|"??"|"!?"|"?!"|"!"|"?")? { return "SAN"; }

([PNBRQK])?([a-h][1-8]|[a-h]|[1-8])?([-x])?([a-h][1-8])("="?([NBRQ]))? { return "SAN"; }

("+="|"=+"|"+/-"|"-/+"|"+--"|"--+"|"&"|"+-"|"-+"|"zz"|"@"|"^"|"=/&"|"="|">>"|"<<"|"//"|"||"|"->/<-"|"->"|"O") { return "SAC"; }

("+!!"|"+??"|"+!?"|"+?!"|"+!"|"+?"|"+"|"#!!"|"#??"|"#!?"|"#?!"|"#!"|"#?"|"#"|"!!"|"??"|"!?"|"?!"|"!"|"?") { return "SUFFIX"; }

[-A-Za-z0-9_#=:\+]+             { return "SYMBOL"; }
"\""("\\".|[^"])*"\""           { yytext = yytext.substr( 1, yytext.length - 2 ); return "STRING"; }
"$"[0-9]+                       { return "NAG"; }
"["                             { return "["; }
"]"                             { return "]"; }
"("                             { return "("; }
")"                             { return ")"; }
<<EOF>>                         { return "EOF"; }
