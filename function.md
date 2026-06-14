JavaScript Functions - Complete Notes

What is a Function?

A function is a block of reusable code that performs a specific task.

function sayMyName() {
    console.log("K");
    console.log("A");
    console.log("N");
}

Calling the function:

sayMyName();

Functions run only when they are called.

---

Function Syntax

function functionName() {
    // code
}

Example:

function greet() {
    console.log("Hello World");
}

---

Function with Parameters

Parameters receive values when a function is called.

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

Calling:

addTwoNumbers(3, 5);

Output:

8

---

Parameters vs Arguments

function addTwoNumbers(num1, num2) {
}

"num1" and "num2" → Parameters

addTwoNumbers(3, 5);

"3" and "5" → Arguments

---

How Different Arguments Affect Output

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(3, 5);

Output:

8

addTwoNumbers(3, "5");

Output:

35

String causes concatenation.

addTwoNumbers(3, null);

Output:

3

addTwoNumbers(3, undefined);

Output:

NaN

Always check the type of arguments passed.

---

Returning Values

Without return:

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

With return:

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(3, 5);

console.log(result);

Output:

8

---

Code After Return

function addTwoNumbers(num1, num2) {
    return num1 + num2;

    console.log("Hello");
}

Anything after "return" never executes.

---

Function with Default Values

function loginUserMessage(username = "Guest") {
    return `${username} just logged in`;
}

console.log(loginUserMessage());

Output:

Guest just logged in

console.log(loginUserMessage("Kanishka"));

Output:

Kanishka just logged in

---

Checking Missing Arguments

function loginUserMessage(username) {

    if (!username) {
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

---

Rest Operator (...)

Used when the number of arguments is unknown.

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(100, 200, 300));

Output:

[100, 200, 300]

---

Rest Operator with Other Parameters

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(
    calculateCartPrice(100, 200, 300, 400)
);

Output:

[300, 400]

First two values go to val1 and val2.

Remaining values go into num1 array.

---

Passing Objects to Functions

const user = {
    username: "Kanishka",
    price: 999
};

function handleObject(anyObject) {
    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
}

Calling:

handleObject(user);

Output:

Username is Kanishka and price is 999

---

Passing Object Directly

handleObject({
    username: "Rahul",
    price: 199
});

Output:

Username is Rahul and price is 199

---

Passing Arrays to Functions

const myArray = [100, 200, 300];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(
    returnSecondValue(myArray)
);

Output:

200

---

Passing Array Directly

console.log(
    returnSecondValue([10, 20, 30])
);

Output:

20

---

Function Expression

const addTwo = function(num) {
    return num + 2;
};

console.log(addTwo(5));

Output:

7

---

Function Declaration

function addOne(num) {
    return num + 1;
}

console.log(addOne(5));

Output:

6

---

Hoisting Difference

Function Declaration:

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}

Works successfully.

Function Expression:

console.log(addTwo(5));

const addTwo = function(num) {
    return num + 2;
};

Gives error because function expressions are not hoisted the same way.

---

Key Learning

- Functions make code reusable.
- Parameters receive data.
- Arguments send data.
- Different argument types produce different outputs.
- "return" sends data back.
- Code after return never runs.
- Default values prevent undefined issues.
- Rest operator collects multiple arguments.
- Objects and arrays can be passed into functions.
- Function declarations and expressions behave differently due to hoisting.

---

One-Line Conclusion

«Functions help us write reusable, organized, and dynamic code by accepting inputs, processing them, and returning outputs.»