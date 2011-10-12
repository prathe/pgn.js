require.def(function(require, exports, module) {

/* Jison generated parser */
var pgn = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"p":3,"pgn":4,"EOF":5,"tagpairs":6,"movetext":7,"[":8,"SYMBOL":9,"STRING":10,"]":11,"moves":12,"terminationmarker":13,"TERMINATIONMARKER":14,"move":15,"san":16,"options":17,"SAN":18,"SUFFIX":19,"option":20,"COMMENT":21,"NAG":22,"SAC":23,"(":24,")":25,"$accept":0,"$end":1},
terminals_: {"2":"error","5":"EOF","8":"[","9":"SYMBOL","10":"STRING","11":"]","14":"TERMINATIONMARKER","18":"SAN","19":"SUFFIX","21":"COMMENT","22":"NAG","23":"SAC","24":"(","25":")"},
productions_: [0,[3,2],[4,2],[4,1],[4,1],[4,0],[6,4],[6,5],[7,2],[7,1],[7,1],[13,1],[12,1],[12,2],[15,2],[15,1],[16,2],[16,1],[17,1],[17,2],[20,1],[20,1],[20,1],[20,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy) {

var $$ = arguments[5],$0=arguments[5].length;
switch(arguments[4]) {
case 1: return $$[$0-2+1-1];
break;
case 2: this.$ = {tagPairs: $$[$0-2+1-1], movetext: $$[$0-2+2-1]};
break;
case 3: this.$ = {tagPairs: $$[$0-1+1-1]};
break;
case 4: this.$ = {movetext: $$[$0-1+1-1]};
break;
case 5: this.$ = {};
break;
case 6: var tagpair = {}; tagpair[$$[$0-4+2-1]] = $$[$0-4+3-1]; this.$ = tagpair;
break;
case 7: $$[$0-5+1-1][$$[$0-5+3-1]] = $$[$0-5+4-1]; this.$ = $$[$0-5+1-1];
break;
case 8: this.$ = {moves: $$[$0-2+1-1], terminationMarker: $$[$0-2+2-1]};
break;
case 9: this.$ = {moves: $$[$0-1+1-1]};
break;
case 10: this.$ = {terminationMarker: $$[$0-1+1-1]};
break;
case 11: this.$ = $$[$0-1+1-1];
break;
case 12: this.$ = [$$[$0-1+1-1]];
break;
case 13: this.$ = $$[$0-2+1-1].concat($$[$0-2+2-1]);
break;
case 14: var options = $$[$0-2+2-1]; options.san = $$[$0-2+1-1]; this.$ = options;
break;
case 15: this.$ = {san: $$[$0-1+1-1]};
break;
case 16: this.$ = $$[$0-2+1-1] + $$[$0-2+2-1];
break;
case 17: this.$ = $$[$0-1+1-1];
break;
case 18: this.$ = $$[$0-1+1-1];
break;
case 19: this.$ = yy.mergeAndConcatenate($$[$0-2+1-1], $$[$0-2+2-1]);
break;
case 20: this.$ = {comments: [$$[$0-1+1-1]]};
break;
case 21: this.$ = {nag: [$$[$0-1+1-1]]};
break;
case 22: this.$ = {sac: [$$[$0-1+1-1]]};
break;
case 23: this.$ = {rav: [$$[$0-3+2-1]]};
break;
}
},
table: [{"3":1,"4":2,"5":[2,5],"6":3,"7":4,"8":[1,5],"12":6,"13":7,"14":[1,9],"15":8,"16":10,"18":[1,11]},{"1":[3]},{"5":[1,12]},{"5":[2,3],"7":13,"8":[1,14],"12":6,"13":7,"14":[1,9],"15":8,"16":10,"18":[1,11]},{"5":[2,4]},{"9":[1,15]},{"5":[2,9],"13":16,"14":[1,9],"15":17,"16":10,"18":[1,11]},{"5":[2,10]},{"5":[2,12],"14":[2,12],"18":[2,12],"25":[2,12]},{"5":[2,11]},{"5":[2,15],"14":[2,15],"17":18,"18":[2,15],"20":19,"21":[1,20],"22":[1,21],"23":[1,22],"24":[1,23],"25":[2,15]},{"5":[2,17],"14":[2,17],"18":[2,17],"19":[1,24],"21":[2,17],"22":[2,17],"23":[2,17],"24":[2,17],"25":[2,17]},{"1":[2,1]},{"5":[2,2]},{"9":[1,25]},{"10":[1,26]},{"5":[2,8]},{"5":[2,13],"14":[2,13],"18":[2,13],"25":[2,13]},{"5":[2,14],"14":[2,14],"18":[2,14],"20":27,"21":[1,20],"22":[1,21],"23":[1,22],"24":[1,23],"25":[2,14]},{"5":[2,18],"14":[2,18],"18":[2,18],"21":[2,18],"22":[2,18],"23":[2,18],"24":[2,18],"25":[2,18]},{"5":[2,20],"14":[2,20],"18":[2,20],"21":[2,20],"22":[2,20],"23":[2,20],"24":[2,20],"25":[2,20]},{"5":[2,21],"14":[2,21],"18":[2,21],"21":[2,21],"22":[2,21],"23":[2,21],"24":[2,21],"25":[2,21]},{"5":[2,22],"14":[2,22],"18":[2,22],"21":[2,22],"22":[2,22],"23":[2,22],"24":[2,22],"25":[2,22]},{"12":28,"15":8,"16":10,"18":[1,11]},{"5":[2,16],"14":[2,16],"18":[2,16],"21":[2,16],"22":[2,16],"23":[2,16],"24":[2,16],"25":[2,16]},{"10":[1,29]},{"11":[1,30]},{"5":[2,19],"14":[2,19],"18":[2,19],"21":[2,19],"22":[2,19],"23":[2,19],"24":[2,19],"25":[2,19]},{"15":17,"16":10,"18":[1,11],"25":[1,31]},{"11":[1,32]},{"5":[2,6],"8":[2,6],"14":[2,6],"18":[2,6]},{"5":[2,23],"14":[2,23],"18":[2,23],"21":[2,23],"22":[2,23],"23":[2,23],"24":[2,23],"25":[2,23]},{"5":[2,7],"8":[2,7],"14":[2,7],"18":[2,7]}],
defaultActions: {"4":[2,4],"7":[2,10],"9":[2,11],"12":[2,1],"13":[2,2],"16":[2,8]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        shifts = 0,
        reductions = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;

    var parseError = this.yy.parseError = typeof this.yy.parseError == 'function' ? this.yy.parseError : this.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected, recovered = false;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                    parseError.call(this, errStr,
                        {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        a = action;

        switch (a[0]) {

            case 1: // shift
                shifts++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext); // semantic values or junk only, no terminals
                stack.push(a[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                reductions++;

                len = this.productions_[a[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, a[1], vstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                }

                stack.push(this.productions_[a[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept

                this.reductionCount = reductions;
                this.shiftCount = shifts;
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){var lexer = ({EOF:"",
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        for (var i=0;i < this.rules.length; i++) {
            match = this._input.match(this.rules[i]);
            if (match) {
                lines = match[0].match(/\n/g);
                if (lines) this.yylineno += lines.length;
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, i);
                if (token) return token;
                else return;
            }
        }
        if (this._input == this.EOF) {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function () {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    }});
lexer.performAction = function anonymous(yy,yy_) {
 /*
    SAC symbol # is not supported because # is used for checkmate as a SAN SUFFIX.
    Some weird suffix such as #!!,#??,#!?,#?!,#!,#? is supported even if it does not make any sense to annotate a checkmate.
*/

switch(arguments[2]) {
case 0:/* skip whitespace */
break;
case 1:
                                    yy_.yytext = yy_.yytext.substr( 1, yy_.yytext.length - 1 );
                                    yy_.yytext.replace(/\s+$/,'');
                                    if (yy_.yytext != '') return "COMMENT";

break;
case 2:
                                    yy_.yytext = yy_.yytext.substr( 1, yy_.yytext.length - 2 );
                                    yy_.yytext = yy_.yytext.replace(/^\s+/,'');
                                    yy_.yytext = yy_.yytext.replace(/\s+$/,'');
                                    if (yy_.yytext != '') return "COMMENT";

break;
case 3: return "TERMINATIONMARKER";
break;
case 4:/* skip move numbers */
break;
case 5:/* skip move numbers */
break;
case 6: return "SAN";
break;
case 7: return "SAN";
break;
case 8: return "SAC";
break;
case 9: return "SUFFIX";
break;
case 10: return "SYMBOL";
break;
case 11: yy_.yytext = yy_.yytext.substr( 1, yy_.yytext.length - 2 ); return "STRING";
break;
case 12: return "NAG";
break;
case 13: return "[";
break;
case 14: return "]";
break;
case 15: return "(";
break;
case 16: return ")";
break;
case 17: return "EOF";
break;
}
};
lexer.rules = [/^\s+/,/^;[^\r\n]*/,/^\{(\\.|[^}])*\}/,/^(1-0|0-1|1\/2-1\/2|\*)/,/^[0-9]+\.*/,/^\.+/,/^(O-O-O|O-O)(!!|\?\?|!\?|\?!|!|\?)?/,/^([PNBRQK])?([a-h][1-8]|[a-h]|[1-8])?([-x])?([a-h][1-8])(=?([NBRQ]))?/,/^(\+=|=\+|\+\/-|-\/\+|\+--|--\+|&|\+-|-\+|zz|@|\^|=\/&|=|>>|<<|\/\/|\|\||->\/<-|->|O)/,/^(\+!!|\+\?\?|\+!\?|\+\?!|\+!|\+\?|\+|#!!|#\?\?|#!\?|#\?!|#!|#\?|#|!!|\?\?|!\?|\?!|!|\?)/,/^[-A-Za-z0-9_#=:\+]+/,/^"(\\.|[^"])*"/,/^\$[0-9]+/,/^\[/,/^\]/,/^\(/,/^\)/,/^$/];return lexer;})()
parser.lexer = lexer;
exports.parser = parser;
})();
});