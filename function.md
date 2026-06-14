##JavaScript Functions - Complete Notes 🚀

##What is a Function?

A function is a reusable block of code that performs a specific task.

function welcomeCustomer() {
    console.log("Welcome to AutoHub Motors");
}

Think of a function as a machine that takes input, processes it, and gives output.

---

Why Functions?

Without Functions:

console.log("Welcome to AutoHub Motors");
console.log("Welcome to AutoHub Motors");
console.log("Welcome to AutoHub Motors");

With Functions:

function welcomeCustomer() {
    console.log("Welcome to AutoHub Motors");
}

welcomeCustomer();

Much cleaner and easier to maintain.

---

Calling a Function

Creating a function does not execute it.

function welcomeCustomer() {
    console.log("Welcome to AutoHub Motors");
}

welcomeCustomer();

Output:

Welcome to AutoHub Motors

---

Function Parameters

Parameters act as placeholders for values.

function showCar(carName) {
    console.log(carName);
}

---

Function Arguments

Arguments are actual values passed to the function.

showCar("Toyota Camry");

Output:

Toyota Camry

---

Parameters vs Arguments

function showCar(carName) {
    console.log(carName);
}

Parameter:

carName

Argument:

showCar("Honda City");

---

How Arguments Affect Output

function showCar(carName) {
    console.log(carName);
}

String:

showCar("Hyundai Verna");

Output:

Hyundai Verna

Number:

showCar(2025);

Output:

2025

No Argument:

showCar();

Output:

undefined

---

Multiple Parameters

function carDetails(carName, price) {
    console.log(`${carName} costs ₹${price}`);
}

carDetails("Toyota Camry", 4500000);

Output:

Toyota Camry costs ₹4500000

---

Return Keyword

The return keyword sends a value back from a function.

function calculatePrice(price, tax) {
    return price + tax;
}

const finalPrice =
    calculatePrice(1000000, 50000);

console.log(finalPrice);

Output:

1050000

---

Code After Return

function calculatePrice(price, tax) {
    return price + tax;

    console.log("This will never run");
}

Anything after return is ignored.

---

Default Parameters

function assignCustomer(
    customerName = "Guest"
) {
    return `${customerName} booked a car`;
}

console.log(assignCustomer());

Output:

Guest booked a car

---

Checking Missing Values

function assignCustomer(customerName) {

    if (!customerName) {
        console.log("Please enter customer name");
        return;
    }

    return `${customerName} booked a car`;
}

---

Rest Operator (...)

Used when the number of arguments is unknown.

function selectedAccessories(
    ...accessories
) {
    return accessories;
}

console.log(
    selectedAccessories(
        "Dash Cam",
        "Seat Cover",
        "Alloy Wheels"
    )
);

Output:

[
  "Dash Cam",
  "Seat Cover",
  "Alloy Wheels"
]

---

Rest Operator with Other Parameters

function cartItems(
    customerName,
    carName,
    ...accessories
) {
    return accessories;
}

cartItems(
    "Kanishka",
    "Toyota Camry",
    "Dash Cam",
    "Seat Cover"
);

Output:

[
  "Dash Cam",
  "Seat Cover"
]

---

Passing Objects to Functions

const car = {
    name: "Honda City",
    price: 1500000
};

function displayCar(carDetails) {
    console.log(
        `${carDetails.name} costs ₹${carDetails.price}`
    );
}

displayCar(car);

Output:

Honda City costs ₹1500000

---

Passing Arrays to Functions

const cars = [
    "Toyota Camry",
    "Honda City",
    "Hyundai Verna"
];

function firstCar(cars) {
    return cars[0];
}

console.log(firstCar(cars));

Output:

Toyota Camry

---

Function Declaration

function calculateMileage(
    distance,
    fuel
) {
    return distance / fuel;
}

console.log(
    calculateMileage(500, 25)
);

Output:

20

---

Function Expression

const calculateEMI =
function(amount) {
    return amount / 12;
};

console.log(
    calculateEMI(240000)
);

Output:

20000

---

Hoisting Difference

Function Declaration:

console.log(calculateTax(1000));

function calculateTax(amount) {
    return amount * 0.18;
}

Works Successfully.

Function Expression:

console.log(calculateTax(1000));

const calculateTax =
function(amount) {
    return amount * 0.18;
};

Throws an Error.

---

Real-World Uses

Functions are commonly used in:

- Vehicle Booking Systems
- Payment Processing
- Inventory Management
- Authentication Systems
- Form Validation
- API Calls

---

Quick Revision

✅ Functions make code reusable

✅ Parameters receive values

✅ Arguments send values

✅ Return sends data back

✅ Default parameters prevent undefined

✅ Rest operator handles multiple arguments

✅ Objects and arrays can be passed into functions

✅ Function declarations and expressions behave differently

---

One-Line Summary

«Functions are reusable blocks of code that take input, perform an action, and optionally return a result.»