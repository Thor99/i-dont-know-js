/*

ES5 added a "strict mode" to the language, which tightens the rules for certain behaviors. Generally, these restrictions are seen as keeping the code to a safer 
and more appropriate set of guidelines. Also, adhering to strict mode makes your code generally more optimizable by the engine. Strict mode is a big win for code,
and you should use it for all your programs.

You can opt in to strict mode for an individual function, or an entire file, depending on where you put the strict mode pragma.

One key difference with strict mode is disallowing the implicit auto-global variable declaration from omitting the var.

*/

=======================================
function foo() {
	"use strict"
	a = 1; // `var` missing, ReferenceError
}

foo();