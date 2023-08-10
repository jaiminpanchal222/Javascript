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

const fruits = ["mango", "banana", "orange", "guava"]
let text ='<u>';
fruits.forEach(myFunction)
text += '</ul>';
document.getElementById("demo").innerHTML = text
function myFunction(value) {
 text += '<li>' + value + '</li>'
}

