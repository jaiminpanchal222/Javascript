// function add() {
//     let number1, number2, sum
//     number1 = parseInt(document.getElementById("first").value);
//     number2 = parseInt(document.getElementById("second").value);
//     sum = number1 + number2
//     document.getElementById("answer").value = sum;
// }

// const car = [];
// car[0] = "Audi",
// car[1] ="Bmw",
// car[2] = "Jaguar",

// document.getElementById('demo').innerHTML= car

// const car = new Array("Audi", 'BMW', "Jaguar","punch")
// document.getElementById('demo').innerHTML = car

//Accessing Array Element
// const cars = ["Audi", "BMW", "Jaguar", "Punch"]
// document.getElementById('demo').innerHTML = cars[3]

// const cars = ["Audi", "BMW", "Jaguar", "Punch"]
// cars[0] = "opel"
// document.getElementById('demo').innerHTML = cars[0]

// const cars = ["Audi", "BMW", "Jaguar", "Punch"]
// document.getElementById('demo').innerHTML = cars.toString();
// //The to string method returns an array as a comma seprated string
// document.getElementById('demo1').innerHTML = cars;

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.
// Arrays use numbers to access its "elements". In this example, person[0] returns John:

// const person = ["John", "Doe", 46];
// document.getElementById('demo').innerHTML = person[0];
// Objects use names to access its "members". In this example, person.firstName returns John:

// const person = {firstName:"John",lastName:"Panchal",age:46}
// document.getElementById("demo").innerHTML = person.firstName;
// document.getElementById("demo").innerHTML = typeof(person);

// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array.
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:

// cars.length // Returns the number of element
// cars.sort // Sort the array

// The length Property
// The length property of an array returns the length of an array(the number of array element)

// const fruits = ["mango","banana","orange","guava"]
// let size = fruits.length;
// document.getElementById("demo").innerHTML = size;

// The length property is always one more than the highest array index

// accessing the last array of an element

// const fruits = ["mango","banana","orange","guava"]
// let size = fruits[fruits.length -1];
// document.getElementById("demo").innerHTML = size

// Looping Array Elements
// One way to loop through an array, is using a for loop:
// const fruits = ["mango", "banana", "orange", "guava"]
// let flen = fruits.length;
// let text = "<ul>";
// for (i = 0; i < flen; i++) {
//     text += '<li>' + fruits[i] + '</li>'
// }
// text += '</ul>'
// document.getElementById("demo").innerHTML = text

// const fruits = ["mango", "banana", "orange", "guava"]
// let text ='<u>';
// fruits.forEach(myFunction)
// text += '</ul>';
// document.getElementById("demo").innerHTML = text
// function myFunction(value) {
//  text += '<li>' + value + '</li>'
// }

// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:
// const fruits = ["mango", "banana", "orange", "guava"]
// fruits.push("pineapple")
// document.getElementById("demo").innerHTML = fruits

// New element can also be added to an array using the length property:

// const fruits = ["mango", "banana", "orange", "guava"]
// document.getElementById("demo").innerHTML = fruits;
// function myFunction() {
//     fruits[fruits.length]= "pineapple"
//     document.getElementById("demo").innerHTML = fruits
// }

// Adding elements with high indexes can create undefined "holes" in an array.

// const fruits = ["mango", "banana", "orange", "guava"];
// fruits[6] = "Lemon";
// let flen = fruits.length;
// let text = " ";
// for (i = 0; i < flen; i++) {
//   text += fruits[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// Associative Arrays
// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.

// const person = [];
// person[0] = "jaimin";
// person[1] = "panchal";
// person[2] = "22";
// document.getElementById("demo").innerHTML = person[0] + " " + person.length;

// WARNING !!
// If you use named indexes, JavaScript will redefine the array to an object.
// After that, some array methods and properties will produce incorrect results.

// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes

// Arrays are special kind of objects with numbered indexes

// When to Use Arrays. When to use Objects.
//Javascript does not support associative arrays
//You should use objects when you want the element names to be string(string)
//You should use array when you want the element names to be numbers

//Javascript new Arrays()

//Javascript has built in Array constructor new Array()
// But you can safely use [] instead;
// The two different statements both create a empty array named points

// const points = new Array(40);
// const points1 = [40];

// const fruits = ["mango", "banana", "orange", "guava"];
// let type = typeof fruits;
// document.getElementById("demo").innerHTML = Array.isArray(fruits);
// document.getElementById("demo").innerHTML = fruits instanceof Array;
// ====================================***********==================================
//Javascript Methods
// 1=> Javascript Array at()
// const fruits = ["mango", "banana", "orange", "guava"];
// let index = 2;
// let fruit = fruits.at(index);
// let fruit = fruits.at(3);
// let fruit = fruits.at(-1);
// document.getElementById("demo").innerHTML = fruit;

// 2=> Array concatenates
//The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays
// const fruit1 = ["mango", "banana", "orange", "guava"];
// const fruit2 = ["mango", "banana", "orange", "guava"];
// const fruit3 = ["mango", "banana", "orange", "guava"];
// let fruit = fruit1.concat(fruit2,fruit3)
// document.getElementById("demo").innerHTML = fruit;

// 3=> Javascript Array constructor
// The constructor property returns the function that created the Array prototype:
// const fruit = ["mango", "banana", "orange", "guava"];
// let text = fruit.constructor;
// document.getElementById("demo").innerHTML = text;

// 4=> Javascript Array copyWithin()
// The copyWithin() method copies array elements to another position in the array.
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// Syntax
// array.copyWithin(target, start, end)
// const fruit = ["mango", "banana", "orange", "guava"];
// let fruits = fruit.copyWithin(0, 1,  3);
// document.getElementById("demo").innerHTML = fruits;

// 5=> Javascript Array entries()
// Create an Array Iterator, and then iterate over the key/value pairs:
// The entries() method does not change the original array.
// Syntax
// array.entries()
// const fruit = ["mango", "banana", "orange", "guava"];
// let ent = fruit.entries(fruit);
// for (let x of ent) {
//   document.getElementById("demo").innerHTML += x + "<br>";
// }
// document.getElementById('demo').innerHTML = ent