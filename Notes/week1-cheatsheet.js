/* =========================================================
   Week 1 JavaScript Cheat Sheet
   (Save as: week1-cheatsheet.js)
   ---------------------------------------------------------
   How to use:
   1) Include this file in a page with a <script src="week1-cheatsheet.js"></script>
   2) Open DevTools (F12) → Console.
   3) Uncomment example lines to see results.
   ========================================================= */

/* =========================
   COMMENTS
   ========================= */
// Single line comment


/*
Multi-line
comment
sdsdd
sdsds
aads
*/

// console.log("Hello")

/* =========================
   VARIABLES
   ========================= */
/*
let   → block-scoped, re-assignable
const → block-scoped, NOT re-assignable (the reference)
var   → function-scoped (legacy; avoid in modern code)
*/
// let username = "maldo017";

// username = "martin017";


// const MAX_USERS = 100;


// var legacy = true; // avoid

/* =========================
   PRIMITIVE DATA TYPES
   ========================= */
/*
string, number, boolean, undefined, null, bigint, symbol
*/
let aString = "1414454556767";       //text in javaScript --> "string" -  'string' - `string`
let bstring = "17";
let aNumber = 42.899;            // integer and floating point are both 'number'
let aBool = true;            //logical data type (true/false)
let aUndef;                  // undefined*
// console.log(aUndef);
let aNull = null;            // special "empty" value
let aBig = 9007199254740993n;// BigInt (note the 'n')
let bBig = 1n;
let aSym = Symbol("id");     // unique & immutable identifier
let bSym = Symbol("id");


// typeof checks:
console.log(typeof aString, typeof aNumber, typeof aBool, typeof aUndef);
console.log(typeof aNull); // "object" (historical quirk)
console.log(typeof aBig, typeof aSym);

/* =========================
   TYPE CONVERSION
   ========================= */
// Explicit:
let n1 = Number("11");       // 11
// console.log(n1);
let n2 = Number("abc");      // NaN
// console.log(n2);
let s1 = String(123);        // "123"

let b1 = Boolean(32322332);         // false
// console.log(b1);
let b2 = Boolean("text");    // true

// Implicit:
// console.log(11 - "2");    // 9  (string → number)
// console.log(5 + "hello 5"); // ("5" + "hello 5")

/* =========================
   TRUTHY / FALSY
   ========================= */
/*
Falsy values only:
- false, 0, 0n, "", null, undefined, NaN
Everything else is truthy.
*/
// console.log(Boolean("hi")); // true
// console.log(Boolean(""));   // false
// console.log(Boolean(0));    // false

/* =========================
   OBJECTS (key → value)
   ========================= */
let user = {
  name: "Alice",
  age: 33,
  email: "alice@example.com",
  "age-2025": 34,           // keys may be quoted
  social: { ig: "alice_ig", facebook: null } // nested object
};
// let userInput = //code that gets userinput
let grades = {
   math: [88,45,99,57],
   socialStudies: [88,90,96]
}
// user.name = userInput;
// console.log(user);

let myObj = {
   name: "Key1 value",
   "key-2": "Key2 Value",
   key3: "Key3 Value" 
};
// console.log(myObj);
// console.log(myObj.key2);
// console.log(myObj.key1, myObj.key2);
// console.log(myObj["key1"]);
// Access:
// console.log(user.name);           // dot notation
// console.log(user["age-2025"]);    // bracket notation (for special keys)
// console.log(user.social.ig);      // nested

// Add / remove:
user.role = "student";
delete user.email;
let booleantype = Boolean(undefined);
console.log(booleantype);
/* =========================
   ARRAYS (ordered lists)
   ========================= */
let arr = ["Alice", 33, true, undefined, null, [1,2,3], "Zed"];
//.push() ---> adds an element to the end of an array

// arr.push("Martin");
// arr.push([10,20,30]);
// console.log(arr);
// let myArr = [];
// Indexing starts at 0:
// console.log(arr[0]);      // "Alice"
// console.log(arr[6]);
// console.log(arr[5][0]);   // 1
// console.log(arr.length);  // number of elements
// let otherVAr = arr[0];
// console.log(otherVAr);
// console.log(arr instanceof Array); // true

// console.log(typeof arr);

/* =========================
   OPERATORS
   ========================= */
// Assignment:
let x = 10;

// Arithmetic: + - * / ** %(modulus, remainder )
// console.log(5 + 2, 5 - 2, 5 * 2, 5 / 2, 2 ** 3, 7 % 3);

// Unary + / - (coerce to number, or negate):
console.log(+"123"); // 123
console.log(+"abc"); // NaN
console.log(-"5");   // -5

// {
//    "user123": {
//       "name": "John Smith",
//       "age": "33",
//       "address": "123 main",
//       "accountType": "Prime"
//    }
// }
// let userAge = "user123".age
// +userAge

// Increment ++/ Decrement --:

// console.log(++c); // 11 (prefix)
// console.log(c++); // 11 (postfix), then c becomes 12
// console.log(c);

// Compound assignment: += -= *= /= %= **=
let total = 100;

// total += 10.99; // 110.99

/* =========================
   LOGICAL OPERATORS (statements)
   ========================= */
/*
&& (AND), || (OR), ! (NOT)
London is a city AND London is in Great Britain ---> true
London is a City AND London is in Iceland --->      false

London is a city OR London is in Iceland  ----> true
London is is a village OR London is in Iceland ---> false

!London is a city ----> false
!London is a village ----> true


Short-circuiting with non-boolean values:
- A && B returns A if A is falsy, otherwise B
- A || B returns A if A is truthy, otherwise B
*/

// console.log(true && true);
// console.log(false && true);
// console.log(false || true);
// console.log(false || false);
// console.log(!true);
// console.log(!false);

// 11) What happens when you add a number to a string?
// Write a console.log using price + 5

// let price = "Our ground beef is 19.99 for 2lbs";
// console.log(price - 5);


// const a = false;
// const b = true;
// const c = false;
// const d = true;

// // console.log(a && b && c || d);// (false && c || d) ---> (false || d) === true
// console.log(a && b && (c || d)); // (false && true && true) ---> (false && true) ---> false

// console.log(true && "OK");     // "OK"
// console.log(0 && "OK");        // 0
// console.log("Alice" || "Bob"); // "Alice"
// console.log("" || "Bob");      // "Bob"
// console.log(!true, !false);    // false true

/* =========================
   STRING TOOLS
   ========================= */
// Concatenation:
// let first = "Martin";
// let last = "Maldonado";
// console.log(first + " " + last);

// // Template literals (interpolation + multiline):
// let age = 33;
// console.log(`Hello, my name is ${first} and I am ${age} years old.`);
// const poem = `Roses are red,
// violets are blue...`;
// console.log(poem);

/* =========================
   COMPARISON OPERATORS ---> return a boolean
   ========================= */
/*
=== strict equality (no type coercion) --> equal in value AND data type --> true
==  loose equality  (coerces types; avoid in most cases)
!== strict inequality
!=  loose inequality

> < >= <=  numeric or lexicographic (for strings)
*/

// console.log("Hello" === "Hello");
//  console.log(10 === 10);      // true
//  console.log("10" == 10);     // true (coerces) ⚠️
//  console.log("10" === 10);    // false (strict)
//  console.log(10 !== 5);       // true
//  console.log("b" > "a");      // true (lexicographic)
//  console.log("z" > "A");      // true ('a' > 'B')


/* =========================
   instanceof / delete
   ========================= */
console.log([] instanceof Array); // true

// const person = { name: "Alice", age: 36 };
// person.age = 35;
// person.email = "email@email.com"
// console.log(person.email); // undefined

/* =========================
   TERNARY OPERATOR
   ========================= */
/*
condition ? expressionIfTrue : expressionIfFalse
*/
let age = 33;
let canVoteMsg = (age >= 18) ? "You can vote!" : "You cannot vote.";
console.log(canVoteMsg);

let number = 11;
let parity = (number % 2 === 0) ? "Even" : "Odd";
console.log(parity);

// Example with OR for a default:
let usernameInput = "maldo111";
let displayName = usernameInput ? usernameInput : "Guest"; // same as: usernameInput || "Guest"
console.log(displayName);

/* =========================
   DIALOGS (BROWSER)
   ========================= */
// alert("Heads up!");
// const confirmed = confirm("Continue?"); // true if OK, false if Cancel
// const nameInput = prompt("What is your name?"); // returns string or null
// const safeName = nameInput ? nameInput : "anonymous";
// console.log(`Hello, ${safeName}`);

/* =========================
   LENGTH / INDEXOF (quick refs)
   ========================= */
// Strings and arrays both have length:
const s = "Hello";
const arr2 = ["a","b","c"];
// console.log(s.length);    // 5
// console.log(arr2.length); // 3

// indexOf on strings/arrays (returns index or -1 if not found):
console.log(s.indexOf("l"));  // 2
console.log(arr2.indexOf("b"));// 1
console.log(arr2.indexOf("d"))

/* =========================
   PRACTICE SNIPPETS (UNCOMMENT)
   ========================= */


// let userInput = "Martin";

// // 10) Use a ternary operator:
// // If usernameInput has a value → use it
// // Otherwise → use "Guest"
// // Save to displayName and log it

// let myternary = userInput === "Martin" ? userInput : "Guest";
// console.log(myternary);

// 1) Type check demo:
// console.log(typeof "USA");          // "string"
// console.log(typeof false);          // "boolean"
// console.log(typeof 17);             // "number"
// console.log(typeof 123n);           // "bigint"
// console.log(typeof undefined);      // "undefined"
// console.log(typeof null);           // "object" (quirk)
// console.log(typeof Symbol("x"));    // "symbol"

// 2) Number conversion & NaN:
// console.log(Number("42"));          // 42
// console.log(Number("4.2"));         // 4.2
// console.log(Number("foo"));         // NaN
// console.log(isNaN(Number("foo")));  // true

// 3) Logical chains:
// console.log(true && true && false || true); // true
// console.log(true && (false || true));       // true

// 4) Building an object and reading nested values:
const profile = {
  name: "Alice",
  stats: { posts: 12, followers: 250 }
};
// console.log(profile.stats.followers);

// 5) Simple validation example:
function isStrongPassword(pw) {
  // length >= 8 AND includes a number (regex: \d)
  return pw.length >= 8 && /\d/.test(pw);
}
// console.log(isStrongPassword("abc"));        // false
// console.log(isStrongPassword("abc12345"));   // true

/* =========================
   QUICK GLOSSARY
   =========================
- Primitive: string, number, boolean, undefined, null, bigint, symbol
- Complex: object, array, function (objects under the hood)
- Truthy/Falsy: values that coerce to true/false in boolean context
- Coercion: converting between types (explicit: Number(), implicit: "5" * 2)
- Strict vs Loose: === / !== (no coercion) vs == / != (coercion)
- Template literal: backticks `...` with ${expr} interpolation
- Ternary: cond ? A : B (inline if/else)
- Short-circuit: A && B and A || B return a value, not just booleans
*/

/* =========================================================
   End of Week 1 Cheat Sheet
   ========================================================= */


