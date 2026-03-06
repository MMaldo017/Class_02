// The code snippet:


function test() {


 };

test();


// is:


// the declaration of the test variable in which the values returned by the completed function will be stored.

// the declaration of an empty test function.

// incorrect, as the code is wrong and does not mean anything.

// the call of the test function.






// If a function is to return some calculated value on completion, which keyword will you use to do this?

// ret;

// function;

// yield;

// return;






function test(counter) {
     console.log("test");
     if (counter > 0)
         test(--counter);
}
test(3);


// How many times will the word "test" be displayed in the console?


// 4

// 3

// 0

// 2






// let x = 10;
// function test() {
//      let x = 20;
//      console.log(x);
// }



// What will be displayed in the console as a result of its execution?


// Nothing will show up.

// 10

// x

// 20







// let x = 10;
// function test(x) {
//      console.log(x);
// }
// test();
// test();




// What will be displayed in the console as a result of its execution?


// 10

// x

// 20

// Nothing will show up.






// let x = 10;
// let y = 20;
// function test(y) {//y = x = 10
//      console.log(y);
// }
// test(x);

// let m = "Martin";
// let n = m;

// console.log(n);



// What will be displayed in the console as a result of its execution?


// y

// Nothing, because the function expects the y variable to be passed and receives x instead.

// 20

// 10





// let sum = function (a, b) {
//      return (a + b);
// }

// What could the definition of the corresponding arrow function look like?

// let sum = (a, b) > a + b;

// let sum = (a, b) => a + b;

// let sum = (a, b) => {
//     a + b;
// };

// let sum = function (a, b) => {
//     return (a + b);
// }
// ;





// A callback function is a function that:

// is always executed at fixed intervals.

// contains a reference to itself in its code.

// is passed to another function as an argument and only called in its code.

// is always called with a certain pre-defined delay.






let multiply = (m, n) => m * n;


// How would you rewrite the function without changing what it does? Select the correct definition.

// let multiply = (m, n) => {
//     console.log(m * n);
// }

// let multiply = (m, n) => {
//     return (m * n);
// }

// let multiply = (m, n) => {
//     m * n;
// }

// let multiply = (m, n) =>
//     return (m * n);

// function myFunction(){
//     console.log("Myfunction")
// }

// setTimeout(myFunction(), 1000);

// setTimeout(myFunction, 1000);



// let count = 0;

// let id = setInterval(() => {
//   count++;
//   console.log(count);
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
// }, 2500);






// let x = 5;

// setTimeout(() => {
//   console.log(x);
// }, 1000);

// x = 10;





//function statement ---> hoisted
function functionName(param1,param2){
  return param1 * param2
};

// let total = functionName(4,4)//arguments
// let total2 = functionName(5,5);

// let grandTotal = functionName(total,total2);

// console.log(grandTotal);


//function expression --> a function in a variable NOT HOISTED!!!!

// let myExpression = function (param1, param2){

//   return param1 * param2
// };

// console.log(myExpression(5,5));




//arrow function

// let secondExpression = (param1,param2) => param1 * param2;



// setTimeout(() => console.log("This is a callback in a setTimeout"), 3000);
