/*

While '==' checks for value equality with coercion allowed, '===' checks for value equality without allowing coercion; === is often called 
"strict equality" for this reason.

Non-equality is represented with '!' before the comparator.

What these rules boil down to is requiring you to think critically about your code and about what kinds of values can come through variables that
get compared for equality. If you can be certain about the values, and == is safe, use it! If you can't be certain about the values, use ===.

You should take special note of the == and === comparison rules if you're comparing two non-primitive values, like objects (including function 
and array). Because those values are actually held by reference, both == and === comparisons will simply check whether the references match, 
not anything about the underlying values.

*/

const a = '666'
const b = 666
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
const arrString = '1,2,3'

a == b // true
a === b // false

a != b // false
a !== b // true

arr1 == arr2 // false
arr1 === arr2 // false
arr1 === arrString // true