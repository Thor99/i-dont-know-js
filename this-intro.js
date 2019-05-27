/*

While it may often seem that this is related to "object-oriented patterns," in JS this is a different mechanism.

If a function has a this reference inside it, that this reference usually points to an object. But which object it points to depends on how the function was 
called.

It's important to realize that this does not refer to the function itself, as is the most common misconception.

*/

function foo() {
  console.log( this.bar );
}

var bar = "global";

var obj1 = {
  bar: "obj1",
  foo: foo
};

var obj2 = {
  bar: "obj2"
};

foo(); // "global"
obj1.foo(); // "obj1"
foo.call( obj2 ); // "obj2"
new foo(); // undefined

/*

There are four rules for how this gets set, and they're shown in those last four lines of that snippet.

foo() ends up setting this to the global object in non-strict mode -- in strict mode, this would be undefined and you'd get an error in accessing the bar 
property -- so "global" is the value found for this.bar.

obj1.foo() sets this to the obj1 object.

foo.call(obj2) sets this to the obj2 object.

new foo() sets this to a brand new empty object.

Bottom line: to understand what this points to, you have to examine how the function in question was called. It will be one of those four ways just shown, and that will then answer what this is.

*/