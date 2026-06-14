JavaScript Objects - Complete Notes

What is an Object?

An object is a collection of key-value pairs.

const user = {
    name: "Kanishka",
    age: 21,
    location: "Dhule"
}

Objects help us represent real-world entities.

---

Accessing Values

Dot Notation

console.log(user.name)

Output:

Kanishka

Bracket Notation

console.log(user["name"])

Output:

Kanishka

Dynamic Key Access

const key = "age"

console.log(user[key])

Output:

21

Changing the value of "key" changes the property being accessed.

---

Symbols as Keys

const mySym = Symbol("key1")

const user = {
    [mySym]: "secret"
}

Access:

console.log(user[mySym])

Without square brackets, Symbol won't work as expected.

---

Updating Values

user.age = 22

Before:

21

After:

22

Changing the property value directly affects future outputs.

---

Adding New Properties

user.email = "kanishka@gmail.com"

Object becomes:

{
    name: "Kanishka",
    age: 22,
    email: "kanishka@gmail.com"
}

---

Freezing Objects

Object.freeze(user)

user.age = 25

Output:

22

Changes are ignored after freezing.

---

Functions Inside Objects

const user = {
    name: "Kanishka",

    greeting: function() {
        console.log("Hello User")
    }
}

Calling:

user.greeting()

Output:

Hello User

---

Using this Keyword

const user = {
    name: "Kanishka",

    greetingTwo: function() {
        console.log(`Hello ${this.name}`)
    }
}

Output:

Hello Kanishka

If "name" changes:

user.name = "Rahul"

Output:

Hello Rahul

"this" always refers to the current object's properties.

---

Singleton Object

const tinderUser = new Object()

Output:

{}

Creates a singleton object.

---

Non-Singleton Object

const tinderUser = {}

Most commonly used.

---

Nested Objects

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "Kanishka",
            lastname: "Wani"
        }
    }
}

Access:

console.log(
    regularUser.fullname.userfullname.firstname
)

Output:

Kanishka

---

Combining Objects

Using Object.assign()

const obj1 = {1: "a"}
const obj2 = {2: "b"}

const obj3 = Object.assign({}, obj1, obj2)

Output:

{
    1: "a",
    2: "b"
}

---

Using Spread Operator

const obj3 = {
    ...obj1,
    ...obj2
}

Same output.

---

Array of Objects

Most common API structure.

const users = [
    {
        id: 1,
        name: "Kanishka"
    },
    {
        id: 2,
        name: "Rahul"
    }
]

Access:

console.log(users[0].name)

Output:

Kanishka

Changing index changes output.

---

Object.keys()

console.log(Object.keys(user))

Output:

["name", "age"]

Returns all keys.

---

Object.values()

console.log(Object.values(user))

Output:

["Kanishka", 21]

Returns all values.

---

Object.entries()

console.log(Object.entries(user))

Output:

[
    ["name", "Kanishka"],
    ["age", 21]
]

Converts object into array format.

---

hasOwnProperty()

console.log(
    user.hasOwnProperty("name")
)

Output:

true

Checks whether a property exists.

---

Object Destructuring

const course = {
    coursename: "JavaScript",
    price: 999
}

const { coursename } = course

console.log(coursename)

Output:

JavaScript

---

Renaming While Destructuring

const {
    coursename: name
} = course

console.log(name)

Output:

JavaScript

---

Real World Connection

Most API responses are objects.

Example:

{
    "name": "Kanishka",
    "followers": 120,
    "following": 50
}

Whenever you fetch data from an API, you'll mostly work with:

- Objects
- Nested Objects
- Arrays of Objects

---

Key Learning

Changing:

- Property values changes output.
- Object references affect original objects.
- "this" depends on the object calling the method.
- Frozen objects cannot be modified.
- Destructuring extracts values directly.
- Most real-world JavaScript applications rely heavily on objects.