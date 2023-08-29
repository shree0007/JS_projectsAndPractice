
// JS FUNCTIONS PRACTICE: Codes below are not for running. They are written just for understanding the JS Functions terminologies and various concepts:


// FUNCTION STRUCTURE:

// function Hello(parapeters) {        //function declaration/definition
//     console.log('Hello')  //logic
// }

// Hello(arguments);   calling the function/Execution

function Hello(parameter) {
    console.log(parameter)
}
Hello('Hello'); //Hello




// FUNCTION EXPRESSION:
const Hi = function () {
    console.log('Hi')
};

Hi(); // Hi

const print = function (a, b) {
    console.log(a + b)
}
print(10, 20) // 30



// RETURNING A FUNCTION:
function sum(a, b) {
    return a + b;
}
sum(10, 5); // value is 15 which can be passed to other variale or function for example let c=sum(10,5), c=15 now.

function sum(a, b) {
    let sum = a + b;
    return sum;
}
sum(10, 5) //15



//DEFAULT PARAMETER:
function calc(a, b) {
    return (2 * (a + b));
}
calc(2, 3); //result 10
calc(9) //undefined: needs two arguments as per parameters

function calc(a, b = 0) {
    return (2 * (a + b));
}
calc(9) // result 18 , default value of b is zero.




// REST PARAMETERS:
function collectThings(x, ...y) {
    console.log(x);
    console.log(y);
}
collectThings(1, 2, 3, 4, 5, 6);  // x=1, y= rest 2-6 in array i.e [2,3,4,5,6]
// Note: ..y is called rest parameter. A function can have only one rest parameter and the rest parameter must be the last parameter defined for the function in parenthesis


// ARROW FUNCTION OR FAT ARROW FUNCTION:
const add = (x, y) => {
    return x + y;
}
add(2, 2) //4

// If the arrow function body have only one statement in one line and its returning something we dont need to give curly braces. we can also remove return keyword like shown below.

const add2 = (x, y) => x + y;

// if the function has only one parameter then we dont need paranthesis either like shown below:
const add3 = x => x;



//NESTED FUNCTIONS: function within a function
function outer() {
    console.log('outer');
    function inner() {   //function inner() is a nested function
        console.log('inner')
    }
    inner();
}
outer() // result: outer inner



//FUNCTION SCOPE

//Rules: 1.  variables defined inside the function cannot be accessed anywhere outside of that function
//       2.  a function can access all the variables inside the scope it is defined. For instance if functio is
//           defined in global scope, then it can access all the varibales from that scope.
//       3. Same rule 1 and 2 applies in case of nested functions. For instance varibales defined inside inner function cant be accessed 
//          by outer function BUT inner function can access all the varibales that is defined in the outer function scope.

//rule 1 example
function doSomething() {
    let x = 10;
    const y = 20;
    var z = 30;
    console.log(x, y, z);
}
doSomething(); // 10 20 30
// but console.log(x, y, z) it will pass error saying variables are not defined.

//rule 2 example
let x = 10;
const y = 20;
var z = 30;
function doSomething() {
    console.log(x, y, z);
}
doSomething(); // 10 20 30



//CLOSURES
//definition: To understand closure we need to first understand nested function and function scope. So, closure is nothing but nested function, because it provides an environment to the outer world so this nested function can live  longer for execution and it can actually perform all the required operations.
function outer(x) {
    function inner(y) {
        return x + y        //this inner function forms a closure 
    }
    return inner  //remember no parenthesis here coz we are not calling/invokig inner function. inner function reference is returned not the actual result in the outer function so we dont use parenthesis.
}
const outerReturn = outer(10) // value of outerReturn will be 10+y
outerReturn(2) //result : 12 (10+2)

// The concept of nested function and function scopes gives us a very powerful feature called closure through which even if the outer function execution is over but we can persist certain values which was passed to the outer function within inner function and compute it at a later point of time. That becomes a powerful feature itself , a powerful design pattern itself in JS which is called closure.



//CALLBACK FUNCTION:
// passing function as a parameter to another function
function foo(bar) {
    bar();              //this function bar() is a callback function
}
foo(function () {
    console.log('bar')
}) //result: bar
//since bar parameter is a function we pass a function in argument. since this function has no name, it is called anonymous function.

//OR 
//by first defining the function that we want to use in argument:
function named() {
    console.log('bar')
}
foo(named); // result: bar

function foo(bar) {
    if (itsNight) {
        bar();
    }
    if (isDrinksOverCheckOnline) {
        bar();
    }
}
foo(function () {
    console.log('go to bar')
})



//Higher Order Functions (HOF):
// HOF is a regular function that takes one or more function as an argument and or returns a function as a value from it
// conditions: 1. It takes one or more functions as argument like callback function
//             2. It may return a function

// example 1
function getCapture(camera) {
    camera();
}
getCapture(function () {
    console.log('Canon');
}) //result: canon

//example 2
function returnFn() {
    return function () {
        console.log('returning')
    }
}
const fn = returnFn();
fn() //result: returning



//PURE FUNCTION:
// pure function is a function that produces the same output for the same input
//pure functions help in predictability which means if the input is same, output will be always same
function sayGreeting(name) {
    return `Hello ${name}`;
}
sayGreeting('Shree') //Hello Shree

// Impure function is a function that doesnot produce the same output for same input (opposite of pure function)
let greeting = 'Hello';
function sayGreeting(name) {
    return `${greeting} ${name}`;
}
sayGreeting('Shree') //Hello Shree
// But when,
greeting = 'Hola';
sayGreeting('Shree') //Hola Shree. So it means sayGreeting function is not producing the same output for same input. Because it is depending on the side effect i.e variable called greeting, which is outside the scope of sayGreeting function.sayGreeting function can not control this particular variable, anyone can change which can create a side effect such that this particular function is no more a pure function.


    // IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSIONS:
    // It means it is a function expression that's where the code inside the function gets executed immediately after it's been defined .
    // The use of IIFE is to execute the function immediately after it's been defined.
    (function () {
        console.log('IIFE');
    })()
// just enclosed anonymous function inside () and then add () to call it
// so in this case the function is defined and executed at the same time which is called IIFE.



// CALL STACK (or function execution stack): see pics in README
// Before understanding call stack, we need to understand function execution
// Note: function has to go inside call stack to get executed
// So when the functions are called they go inside call stack to get executed, and once they are executed they get out of the stack. For instance if one function (first) contains second function inside it, first the second function is executed, until that time first function remains in call stack. once second function is executed it gets out of the stack and with the execution of second function, first function also gets executed simultaneously and first function also gets out of call stack.
// this concept helps us to understand how JS engine maintains at what sequence your function should be executed
// This concept is necessary to understand synchronous and asynchronous programming deeply.



// RECURSION:
// Recursion means a function that refer or call itself
function foo() {
    console.log('foo');
    foo();
}
foo(); // prints foo in a loop for long time till it gives a error message saying: maximum call stack size exceeded.
// if it is giving an error why should we use recursion???

// So whenever we are using recursion, we have to make sure that we have something called base condition
// recursion without a base condition is not of much use 
// base condition means under which condition you have to stop the recursion
// so we need to stop the recursion at some point of time because we want to stop the execution of the function to execute itself at some point of time so that we can exit it out or do something else, so that condition is called base condition.
function recurse() {
    if (base_condition) {
        //do something;
        return;
    }
    recurse();
}

//lets write a program for recursion use:
function fetchWater(count) {
    if (count === 0) {
        console.log('No more water left!');
        return;
    }
    console.log('Fetching water...');
    fetchWater(count - 1);
}
fetchWater(5); // result: fecthing water...*5 times and no more water left*1time
// since this can also be achived using for loop , so there is debate between use of recursion vs for loop. Use for loop where ever it is applicable and use recursion for instance when creating factorial of a number(5! which is 5*4*3*2*1) because recursion makes the code much more readable than doing a factorial using for loop. So readability is one of the factor that we want to take it into account when we use recursion over for loop, whereever recursion is applicable. 



