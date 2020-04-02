/*
* JavaScript Arrays
* https://www.w3schools.com/js/js_arrays.asp
* */

// test1();
// test2();
// test3();
// test4();
// test5();
// test6();
// test7();
// test8();
// test9();
test10();


// Creating an Array
function test1() {
    var cars = ["Saab", "Volvo", "BMW"];
    console.log(cars);
}

// Using the JavaScript Keyword new
function test2() {
    var cars = new Array("Saab", "Volvo", "BMW");
    console.log(cars);
}

// Access the Elements of an Array
// Note: Array indexes start with 0.
// [0] is the first element. [1] is the second element.
function test3() {
    var cars = ["Saab", "Volvo", "BMW"];
    console.log(cars[0]);
}

// Array Properties and Methods
function test4() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.length);
}

// Accessing the First Array Element
function test5() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits[0]);
}

// Accessing the Last Array Element
function test6() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits[fruits.length - 1]);
}

// Looping Array Elements
function test7() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}

// Adding Array Elements
function test8() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Lemon");
    console.log(fruits);
}

// How to Recognize an Array
// The typeof operator returns object because a JavaScript array is an object.
function test9() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var type = typeof fruits;
    console.log(type);
}

function test10() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(i);
    }
    console.log(arr);
    console.log(arr.toString());
}