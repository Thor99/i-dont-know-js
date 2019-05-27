/*

Closure is one of the most important, and often least understood, concepts in JavaScript. I won't cover it in deep detail here, and instead refer you to the 
Scope & Closures title of this series. But I want to say a few things about it so you understand the general concept. It will be one of the most important 
techniques in your JS skillset.

You can think of closure as a way to "remember" and continue to access a function's scope (its variables) even once the function has finished running.

*/

function makeAdder(x) {
  function add(y) {
    return y + x;
  };

  return add;
}

var plusOne = makeAdder( 1 );
var plusTen = makeAdder( 10 );

plusOne( 3 );   // 4  <-- 1 + 3
plusOne( 41 );  // 42 <-- 1 + 41
plusTen( 13 );  // 23 <-- 10 + 13

/*
When we call makeAdder(1), we get back a reference to its inner add(..) that remembers x as 1. We call this function reference plusOne(..).
When we call makeAdder(10), we get back another reference to its inner add(..) that remembers x as 10. We call this function reference plusTen(..).
When we call plusOne(3), it adds 3 (its inner y) to the 1 (remembered by x), and we get 4 as the result.
When we call plusTen(13), it adds 13 (its inner y) to the 10 (remembered by x), and we get 23 as the result.
*/

==================================

function User(){
  var username, password;

  function doLogin(user,pw) {
    username = user;
    password = pw;

    // do the rest of the login work
  }

  var publicAPI = {
    login: doLogin
  };

  return publicAPI;
}

// create a `User` module instance
var fred = User();

fred.login( "fred", "12Battery34!" );


/*

The User() function serves as an outer scope that holds the variables username and password, as well as the inner doLogin() function; these are all private 
inner details of this User module that cannot be accessed from the outside world.

Warning: We are not calling new User() here, on purpose, despite the fact that probably seems more common to most readers. User() is just a function, not a 
class to be instantiated, so it's just called normally. Using new would be inappropriate and actually waste resources.

Executing User() creates an instance of the User module -- a whole new scope is created, and thus a whole new copy of each of these inner variables/functions. 
We assign this instance to fred. If we run User() again, we'd get a new instance entirely separate from fred.

The inner doLogin() function has a closure over username and password, meaning it will retain its access to them even after the User() function finishes running.

publicAPI is an object with one property/method on it, login, which is a reference to the inner doLogin() function. When we return publicAPI from User(), it 
becomes the instance we call fred.

At this point, the outer User() function has finished executing. Normally, you'd think the inner variables like username and password have gone away. But here 
they have not, because there's a closure in the login() function keeping them alive.

That's why we can call fred.login(..) -- the same as calling the inner doLogin(..) -- and it can still access username and password inner variables.

*/

