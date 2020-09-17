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
// test10();
// test11();
test12();
// test13();
// test14();


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

// push, pop
function test8() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Lemon");
    console.log(fruits);
    fruits.pop();
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

/**
 * Queues using shifting and unshifting
 * https://www.learn-js.org/en/Manipulating_Arrays
 *
 * The shift and unshift methods are similar to push and pop, only they work from the beginning of the array.
 * We can use the push and shift methods consecutively to utilize an array as a queue. For example:
 * */
function test11() {
    var myQueue = [];
    myQueue.push(1);
    myQueue.push(2);
    myQueue.push(3);

    console.log(myQueue.shift());
    console.log(myQueue.shift());
    console.log(myQueue.shift());
    console.log(myQueue);

    // The unshift method is used to insert a variable at the beginning of an array. For example:
    var myArray = [1, 2, 3];
    myArray.unshift(0);
    console.log(myArray);
}

/**
 * Splicing
 * https://www.learn-js.org/en/Manipulating_Arrays
 *
 * Splicing arrays in JavaScript removes a certain part from an array to create a new array,
 * made up from the part we took out.
 * For example, if we wanted to remove the five numbers from the following array beginning from the 3rd index, we would do the following:
 *
 * After splicing the array, it will only contain the part before and after the splicing.
 * The splice is equal to all the variables between 3 and 7 (inclusive), and the remainder of the array,
 * which contains all variables between 0 and 2 (inclusive), and 8 to 9 (inclusive).
 * */
function test12() {
    var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    var splice = myArray.splice(0, 1);
    // var splice = myArray.splice(3, 5);
    //
    console.log(splice);
    console.log(myArray);
}

/**
 * Array.prototype.sort()
 */
function test13() {
    var items = [
        {name: 'Edward', value: 21},
        {name: 'Sharpe', value: 37},
        {name: 'And', value: 45},
        {name: 'The', value: -12},
        {name: 'Magnetic', value: 13},
        {name: 'Zeros', value: 37}
    ];
    console.log(items);

    // sort by value
    items.sort(function (a, b) {
        return a.value - b.value;
    });
    console.log(items);
}

function test14() {
    var arr = [];
    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    arr.push(5);

    console.log(arr);
    var idx = arr.indexOf(2);
    console.log(idx);
    arr.splice(idx, 1);
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        var arrElement = arr[i];
    }
}