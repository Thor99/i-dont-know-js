/*

Wherever a var appears inside a scope, that declaration is taken to belong to the entire scope and accessible everywhere throughout.

Metaphorically, this behavior is called hoisting, when a var declaration is conceptually "moved" to the top of its enclosing scope. 

It's not common or a good idea to rely on variable hoisting to use a variable earlier in its scope than its var declaration appears; it can be quite confusing. 
It's much more common and accepted to use hoisted function declarations, as we do with the foo() call appearing before its formal declaration.

When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes. For example:
*/ 


=======================================
var a = 2;

foo(); // works because `foo()`

// declaration is "hoisted"
function foo() {
	a = 3;

	console.log( a );	// 3

	var a; // declaration is "hoisted" to the top of `foo()`
}

console.log( a );	// 2

=======================================
function foo() {
  var a = 1;

  function bar() {
    var b = 2;

    function baz() {
      var c = 3;

      console.log( a, b, c ); // 1 2 3
    }

    baz();
    console.log( a, b );    // 1 2
  }

  bar();
  console.log( a );       // 1
}

foo();

// Notice that c is not available inside of bar(), because it's declared only inside the inner baz() scope, and that b is not available to foo() for the same reason.
=======================================
function foo() {
  var a = 1;

  if (a >= 1) {
    let b = 2;

    while (b < 5) {
      let c = b * 2;
      b++;

      console.log( a + c );
    }
  }
}

foo();
// 5 7 9

/* 
Because of using let instead of var, b will belong only to the if statement and thus not to the whole foo() function's scope. Similarly, c belongs only to 
the while loop. Block scoping is very useful for managing your variable scopes in a more fine-grained fashion, which can make your code much easier to maintain 
over time.
*/


