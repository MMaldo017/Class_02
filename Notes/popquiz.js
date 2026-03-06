// The condition if( a >= 0 ) can be replaced by the condition:


// if (0 < a);


// if (!(a > 0 && a == 0));


// if (a > 0 && a == 0);


// if (a > 0 || a == 0);




// The condition if (!a) can be replaced by the condition:


// if (!!a);


// if (a == false);


// if (a);


// if (a === false);




// We want to rewrite the following code snippet using the ternary operator:

// let name;
// if (test) {
//     name = "Alice";
// } else {
//     name = "Bob";
// }

// let name = if test ? "Alice" : "Bob";


// let name = test : "Alice" ? "Bob";


// let name = (test)("Alice")("Bob");


// let name = test ? "Alice" : "Bob";








// let x = 100;
// if (x < 100){
//     x = 20;
// }
// console.log(x)

// What will be displayed in the console as a result of its execution?


// 100

// 20

// nothing

// false







// if (counter <= 10) {
//     if (counter >= 10) {
//      console.log(1);
//     }
// }

// We can replace it using:


// if (true) console.log(1);

// if (false) console.log(1);

// if (counter >= 10) console.log(1);

// if (counter == 10) console.log(1);





// if (counter <= 10 && show === false) {
//     console.log("test");
// }
// What values can the counter and show variables have so that the console displays "test" as a result of code execution?


// counter: 11, show: false

// counter: 10, show: true

// counter: 10, show: false

// counter: 9, show: true









// The switch statement:


// is not present in the JavaScript language.

// is a conditional statement that works identically to the if statement.

// is a conditional statement that allows different actions to be taken depending on the value stored in the indicated variable.

// allows you to change the program mode to debug mode.



// if (counter === 10) {
//     console.log("abc");
// }

// case(counter) {
//   switch 10:
//      console.log("abc")
// };

// switch(counter) 
//   case 10:
//      console.log("abc");

// switch(counter) {
//   case 10:
//      console.log("abc")
// };

// switch(counter) {
//   case ? 10 :
//      console.log("abc")
// };




// Which of the following loop instructions is intended only to loop through all the keys of the indicated object?

// for ... of

// for ... in

// do ... while

// if ... else





// for (let a = 4; a < 4; a++) {
//     console.log("test");
// }

// How many times will "test" be displayed in the console as a result of its execution?


// 4

// 3

// 1

// It will not be displayed at all.

//It maybe 3??






// let steps = [3, 2, 1];
// for (let n of steps)
// console.log(n);

// What will appear on the console as a result?


// 3 2 1

// 1 2 3

// "[3, 2, 1]"

// 0 1 2