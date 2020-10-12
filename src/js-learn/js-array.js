/**
 * Array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
 *
 * Description
 * Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
 * Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length
 * can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays
 * are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these
 * are convenient characteristics; but if these features are not desirable for your particular use, you might
 * consider using typed arrays.
 *
 * Arrays cannot use strings as element indexes (as in an associative array) but must use integers. Setting or
 * accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from
 * the array list itself, but will set or access a variable associated with that array's object property collection.
 * The array's object properties and list of array elements are separate, and the array's traversal and mutation operations
 * cannot be applied to these named properties.
 */
test1();
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
// test12();
// test13();
// test14();


/**
 * Array() constructor
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
 *
 * The Array() constructor is used to create Array objects.
 *
 * SyntaxSyntax
 * [element0, element1, ..., elementN]
 * new Array(element0, element1[, ...[, elementN]])
 * new Array(arrayLength)
 *
 * Parameters
 *      elementN
 *      A JavaScript array is initialized with the given elements, except in the case where a single argument
 *      is passed to the Array constructor and that argument is a number (see the arrayLength parameter below).
 *      Note that this special case only applies to JavaScript arrays created with the Array constructor, not
 *      array literals created with the bracket syntax.
 *
 *      arrayLength
 *      If the only argument passed to the Array constructor is an integer between 0 and 232-1 (inclusive),
 *      this returns a new JavaScript array with its length property set to that number (Note: this implies
 *      an array of arrayLength empty slots, not slots with actual undefined values). If the argument is any
 *      other number, a RangeError exception is thrown.
 */
function test1() {
    // test1_1();
    // test1_2();
    test1_3();
}

/**
 * Array literal notation
 * Arrays can be created using the literal notation:
 */
function test1_1() {
    let fruits = ['Apple', 'Banana'];

    console.log(fruits.length); // 2
    console.log(fruits[0]);     // "Apple"
}

/**
 * Array constructor with a single parameter
 * Arrays can be created using a constructor with a single number parameter. An array with its length
 * property set to that number and the array elements are empty slots.
 */
function test1_2() {
    let fruits = new Array(2);

    console.log(fruits.length); // 2
    console.log(fruits[0]);     // undefined
}

/**
 * Array constructor with multiple parameters
 * If more than one argument is passed to the constructor, a new Array with the given elements is created.
 */
function test1_3() {
    let fruits = new Array('Apple', 'Banana');

    console.log(fruits.length); // 2
    console.log(fruits[0]);     // "Apple"
}

/**
 * Static properties
 *
 * get Array[@@species]
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species
 *
 * The Array[@@species] accessor property returns the Array constructor.
 */
function test2() {
}

/**
 * Static methods
 *
 * Array.from()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
 */
function test3() {

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