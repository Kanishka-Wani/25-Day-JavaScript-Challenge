🚀 JavaScript Functions - Complete Guide

«Functions are reusable blocks of code that help us avoid repetition and make programs easier to maintain.»

---

📌 What is a Function?

Imagine you need to print your name 100 times.

Without functions:

console.log("Kanishka");
console.log("Kanishka");
console.log("Kanishka");

With functions:

function sayMyName() {
    console.log("Kanishka");
}

sayMyName();

✅ Write once, use anywhere.

---

🏗️ Function Structure

function greet() {
    console.log("Hello World");
}

Breakdown

Part| Meaning
function| Keyword
greet| Function Name
()| Parameters
{}| Function Body

---

▶️ Calling a Function

Creating a function does nothing until it is called.

function greet() {
    console.log("Hello");
}

greet();

Output

Hello

---

🎯 Parameters vs Arguments

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

Parameters

num1
num2

Arguments

addTwoNumbers(3, 5);

3
5

---

🧪 How Arguments Change Output

Numbers

addTwoNumbers(3, 5);

Output:

8

---

Number + String

addTwoNumbers(3, "5");

Output:

35

⚠️ JavaScript converts the number into a string and joins them.

---

Number + Null

addTwoNumbers(3, null);

Output:

3

Because:

null → 0

---

Number + Undefined

addTwoNumbers(3, undefined);

Output:

NaN

🚨 Undefined often causes unexpected results.

---

🔄 Returning Values

Without Return

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

You can see the output, but cannot store it.

---

With Return

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(3, 5);

console.log(result);

Output:

8

✅ Return sends data back.

---

⛔ Code After Return

function test() {
    return "Done";

    console.log("Hello");
}

Output:

Done

The console.log never runs.

---

🎁 Default Parameters

function loginUserMessage(username = "Guest") {
    return `${username} just logged in`;
}

No Argument

loginUserMessage();

Output:

Guest just logged in

---

With Argument

loginUserMessage("Kanishka");

Output:

Kanishka just logged in

---

🛡️ Handling Missing Input

function loginUserMessage(username) {

    if (!username) {
        console.log("Please enter username");
        return;
    }

    return `${username} just logged in`;
}

Good practice for real projects.

---

📦 Rest Operator (...)

Used when we don't know how many values will be passed.

function calculateCartPrice(...prices) {
    return prices;
}

calculateCartPrice(100, 200, 300);

Output:

[100, 200, 300]

---

🎯 Rest Operator with Multiple Parameters

function calculateCartPrice(val1, val2, ...prices) {
    return prices;
}

calculateCartPrice(100, 200, 300, 400);

Output:

[300, 400]

What Happened?

Value| Stored In
100| val1
200| val2
300| prices
400| prices

---

🧑‍💻 Passing Objects to Functions

const user = {
    username: "Kanishka",
    price: 999
};

function handleObject(anyObject) {
    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
}

handleObject(user);

Output:

Username is Kanishka and price is 999

---

⚡ Passing Object Directly

handleObject({
    username: "Rahul",
    price: 199
});

Output:

Username is Rahul and price is 199

---

📚 Passing Arrays to Functions

const myArray = [100, 200, 300];

function returnSecondValue(arr) {
    return arr[1];
}

returnSecondValue(myArray);

Output:

200

---

⚡ Passing Array Directly

returnSecondValue([10, 20, 30]);

Output:

20

---

🏗️ Function Declaration

function addOne(num) {
    return num + 1;
}

addOne(5);

Output:

6

---

🏗️ Function Expression

const addTwo = function(num) {
    return num + 2;
};

addTwo(5);

Output:

7

---

🚨 Hoisting Difference

Function Declaration

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}

✅ Works

---

Function Expression

console.log(addTwo(5));

const addTwo = function(num) {
    return num + 2;
};

❌ Error

Because function expressions are not hoisted like function declarations.

---

💡 Real World Usage

Functions are everywhere:

- Login Systems
- Payment Processing
- Form Validation
- API Calls
- Cart Calculations
- Authentication

Every major JavaScript application relies heavily on functions.

---

📝 Quick Revision

✅ Functions make code reusable

✅ Parameters receive values

✅ Arguments send values

✅ Return sends data back

✅ Default values prevent errors

✅ Rest operator collects multiple values

✅ Objects and arrays can be passed into functions

✅ Function declarations and expressions behave differently

---

🎯 One-Line Summary

«Functions are reusable blocks of code that accept input, perform operations, and optionally return output.»