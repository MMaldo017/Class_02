let id = "100";
{
let id = 200;
id = id + 1;
console.log(id);
}


// What will appear to the console as a result?


// 200

// 201

// 1001

// 101



//----------------------------------------------------------------



// Select a set of data types, containing only complex types:


// Array, Object

// Array, Object, String

// Boolean, Number, Bigint

// Object, String


//----------------------------------------------------------------



// Using the string interpolation technique, we can create the string:


"I do not like travelling by plane"

// and store it in the msg variable using the command:


// let means = "plane";
// let msg = `I do not like travelling by ${means}`;


// let means = "plane";
// let msg = 'I do not like travelling by \{ means \}';


// let means = "plane";
// let msg = `I do not like travelling by {means}`;


// let means = "plane";
// let msg = "I do not like travelling by ${ means }";



//----------------------------------------------------------------



// We declare a movie object, with two fields: title and year:


let movie = {
title: "Life",
year: 1999
};

// To change the value of the title field to "Matrix" we need to perform:


// title->movie = "Matrix";


// movie[title] = "Matrix";


// movie{title} = "Matrix";


// movie.title = "Matrix";



//----------------------------------------------------------------



// You declare the following array of animals: 
let animals = ["canary", "dog", "cat"];
// Then, you call the method 
animals.push("hamster");
//What will the animals array look like after calling the method?



// ["hamster"]


// ["canary", "dog", "cat"]


// ["hamster", "canary", "dog", "cat"]


// ["canary", "dog", "cat", "hamster"]


//----------------------------------------------------------------


// Analyze the code snippet:

let winter = ["December", "January", "February"]; 
let index = winter.indexOf("February");

// What value will the index variable have?


// 1


// "February"


// 3


// 2


//----------------------------------------------------------------


let msg1 = 'hello';
let msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1);

// What will appear on the console as a result?


// hello

// o

// h

// ohello


//----------------------------------------------------------------


let test = prompt("Run", "code");

// What value will the test variable have if, after running the code, we immediately press the OK button on the newly created dialog?


// code

// OK

// true

// Run


//----------------------------------------------------------------


let x = false || true;
let y = "true" && "false";
let z = false && true;
console.log(`${x} ${y} ${z}`);

// What will appear in the console as a result of its execution?


// true false false

// false false false

// false true true

// false false true


//----------------------------------------------------------------


let a = true && 20;
let b = 0 || 20
let c = 0 && 20;
console.log(`${a} ${b} ${c}`);

// What will appear in the console as a result of its execution?


// true 20 0

// 20 20 0

// 1 1 0

// true true false


//----------------------------------------------------------------


// Which of the following loop instructions checks the loop continuation condition only after the iteration has been completed?


// do ... while

// for ... in

// for

// while


//----------------------------------------------------------------


// The following function using a function expression has been defined:


let sum = function (a, b) {
    return (a + b);
}

// What could the definition of the corresponding arrow function look like?


// let sum = function (a, b) => {
//      return (a + b); }

// let sum = (a, b) => { a + b; };

// let sum = (a, b)-- > a + b;

// let sum = (a, b) => a + b;


//----------------------------------------------------------------


for(let a=1; a<10; a+=2) {
    console.log(a);
};

// Which statement can replace the for from the example?


// let counter = 0;
// while (counter < 10) console.log(counter++);


// let counter = 0;
// while (counter < 9) console.log(counter++);


// let counter = 0;
// while (counter++ < 10) console.log(counter++);


// let counter = 1;
// while (counter++ < 10) console.log(counter++);


//----------------------------------------------------------------


let colors = ['red', 'green', 'blue'];
for (let c of colors) console.log(c);

// What will appear on the console as a result?


// 0
// 1
// 2

// red
// green
// blue

// ['red', 'green', 'blue']

// 3


//----------------------------------------------------------------


let route = {distance: 131, elevation: 1.4};
for (let k in route) console.log(k);

// What will appear on the console as a result?


// 2

// distance
// elevation

// distance

// 131
// 1.4



//----------------------------------------------------------------
{
let a = (n) => {
    return n > 2 ? n * a(n - 1) : 2
}
console.log(a(6));
}

// What will appear on the console as a result?


// 720

// 4

// 6

// 120


//----------------------------------------------------------------

x = [40, 10, 30, 20, 50];
x.sort(cmp);

// How should the function cmp be declared if, after the code execution, the elements of the array x are sorted in ascending order?


// let cmp = (a, b) => b - a;

// let cmp = (a, b) => a - b;

// let cmp = (a, b) => b < a;

// let cmp = (a, b) => b > a;


//----------------------------------------------------------------


let counter = 2;
let interval = setInterval(() => {
    console.log(counter);
// Insert missing line here.
}, 1000);

// What should the missing line look like if the execution of this code results in the console displaying the values 2, 1, and 0 in sequence?


// clearInterval(interval);

// if (counter-- <= 0) clearInterval(interval);

// while (counter-- >= 0) clearInterval(interval);

// if (counter-- >= 0) clearInterval(interval);



//----------------------------------------------------------------

function execute(todo, a, b) {
return todo(a, b);
}
console.log(execute(power, 3, 2));

// Before declaring the function, we should add one more line of code. Which one, if the execution of the completed code will result in the console displaying the value 9?


// let power = (x,y) => x * y;

// let power = (x, y) => x ** y;

// let power = 9;

// let power = () => a ** b;


//----------------------------------------------------------------




