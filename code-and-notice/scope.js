/*
  - Lexical Scope
  - block scope
  - function scope
  - global scope


  Closure
*/

/*

Global Scope: variables defined outside of any function or curly brackets are known as global variables and have global scope. Global scope means that the variables can be accessed from any part of that program, any function or conditional state can access that variable.

Local scope:  variable inside curly brackets {} or inside a function. Local Scope broken down into two different scopes:

- Block Scope: A variable when declared inside the IF or SWITCH conditions or inside FOR or WHILE loops.
- Function Scope: When a variable is declared inside a FUNCTION.


var (Global and Function scope) doesn't have block scope.
      * outside a function and curly brackets become GLOBAL scope. (Globale variable)
      * inside a function, becomes FUNCTION scope. (local variable)

let (Global, Block, and Function scope)
      * outside a function and curly brackets become GLOBAL scope. (Globale variable)
      * outside a function,  declared inside a { } becomes Block scope. (local variable)
      * inside a function, becomes FUNCTION scope. (local variable)
*/

var a = 15; // Global Variable
if (2 === 2) {
  var a =10; //updated value for Global variable
}


function localVar() {
  var a = 100; // Defined inside the function (Local variable)
  console.log(`localvar Function Scope =  ${a}`);
}


function localVarbyparm(a) {
  a++; // Function variable (Local variable)
  console.log(`localVarbyparm Function Scope =  ${a}`);
}

function takeGlobalvar(){
    a=200; //updated value for Global variable
    //(took the global variable a from outside the function because the function doesn't have variable a)
}

console.log(`Global Scope after update=  ${a}`);

localVar();

console.log(`Global Scope =  ${a}`);

localVarbyparm(a);
console.log(`Global Scope =  ${a}`);

takeGlobalvar();
console.log(`Global Scope after takeGlobalvar function =  ${a}`);

/*
result:
  Global Scope after update=  10
  localvar Function Scope =  100
  Global Scope =  10
  localVarbyparm Function Scope =  11
  Global Scope =  10
  Global Scope after takeGlobalvar function  =  200
*/

// ----------------------------------------------------------------------------------------------- let -------------

let a = 15; // Global Variable
if (2 === 2) {
  let a =10; //Defined inside the block (Local variable)
}


function localVar(){
  let a = 100; // Defined inside the function (Local variable)
  console.log(`localvar Function Scope =  ${a}`);
}


function localVarbyparm(a) {
  a++; // Function variable (Local variable)
  console.log(`localVarbyparm Function Scope =  ${a}`);
}


function takeGlobalvar(){
    a=200; //updated value for Global variable
    //(took the globle variable a from outside the function because the function doesn't have variable a)
}

console.log(`Global variable did not update after IF block =  ${a}`);

localVar();
console.log(`Global Scope =  ${a}`);
localVarbyparm(a);
console.log(`Global Scope =  ${a}`);
takeGlobalvar();
console.log(`Global varable updated in function takeGlobalvar =  ${a}`);


/*
result:
  Global variable did not update after IF block =  15
  localvar Function Scope =  100
  Global Scope =  15
  localVarbyparm Function Scope =  16
  Global Scope =  15
  Global varable updated in function takeGlobalvar =  200
*/
