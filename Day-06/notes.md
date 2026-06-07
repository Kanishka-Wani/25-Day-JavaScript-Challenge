# Day 06 - JavaScript Notes

## Lecture 14 - Arrays

### What is an Array?

Array is a data structure used to store multiple values in a single variable.

JavaScript arrays are:

* Resizable (size can be changed)
* Can store elements of different datatypes
* Indexed starting from 0

### How to Declare Arrays

```javascript
const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["shaktiman", "naagraj", "bheem"]

const myArr2 = new Array(1, 2, 3, 4)
```

### Accessing Array Elements

```javascript
console.log(myArr[0])
console.log(myHeros[0])
```

---

## Array Methods

### push()

Adds element at the end of array.

```javascript
myArr.push(6)
myArr.push(7)
```

### pop()

Removes last element from array.

```javascript
myArr.pop()
```

### unshift()

Adds element at the beginning of array.

```javascript
myArr.unshift(9)
```

Note:
When array has many elements, unshift() can be time consuming because all indexes need to be shifted.

### shift()

Removes first element from array.

```javascript
myArr.shift()
```

### includes()

Checks whether a value exists in array.

```javascript
myArr.includes(9)
```

### indexOf()

Returns index of a value.

```javascript
myArr.indexOf(3)
```

### join()

Converts array into string.

```javascript
const newArr = myArr.join()
```

```javascript
typeof newArr // string
typeof myArr  // object
```

---

## slice() vs splice()

### slice()

* Does not modify original array.
* Returns selected portion.

```javascript
const myn1 = myArr.slice(1, 3)
```

### splice()

* Modifies original array.
* Removes selected elements.

```javascript
const myn2 = myArr.splice(1, 3)
```

### Summary

slice():

* Original array remains unchanged.
* End index is not included.

splice():

* Original array gets modified.
* Removed elements are returned.

---

## Lecture 15 - Array Part 2

### Combining Arrays

### push()

```javascript
marvel_heros.push(dc_heros)
```

Adds entire array as a single element.

### concat()

Combines arrays and returns a new array.

```javascript
const allHeros = marvel_heros.concat(dc_heros)
```

### Spread Operator (...)

Preferred modern way to merge arrays.

```javascript
const all_new_heros = [...marvel_heros, ...dc_heros]
```

---

## flat()

Used to remove nested arrays.

```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
```

Infinity means flatten all levels.

---

## Array Utility Methods

### Array.isArray()

Checks whether value is an array.

```javascript
Array.isArray("kanishka")
```

### Array.from()

Creates array from iterable values.

```javascript
Array.from("kanishka")
```

Output:

```javascript
['k', 'a', 'n', 'i', 's', 'h', 'k', 'a']
```

Interesting:

```javascript
Array.from({ name: "kanishka" })
```

Returns empty array because JavaScript does not know whether to create array from keys or values.

### Array.of()

Creates array from multiple values.

```javascript
let score1 = 100
let score2 = 200
let score3 = 300

Array.of(score1, score2, score3)
```

Output:

```javascript
[100, 200, 300]
```

---

# Overall Day 06 Summary

Today I learned:

* Arrays are resizable and can store different datatypes.
* How to create and access arrays.
* Important array methods like push(), pop(), shift(), unshift(), includes(), indexOf() and join().
* Difference between slice() and splice().
* Different ways to combine arrays using push(), concat() and spread operator.
* How to flatten nested arrays using flat().
* Utility methods like Array.isArray(), Array.from() and Array.of().

Day 06 completed ✅
