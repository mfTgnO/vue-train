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
// test12();
// test13();
// test14();
// test15();
// test16();
// test17();
// test18();
// test19();
// test20();
// test21();
// test22();
test23();


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
 *
 * Syntax
 * Array.from(arrayLike [, mapFn [, thisArg]])
 *
 * Parameters
 *      arrayLike
 *      An array-like or iterable object to convert to an array.
 *
 *      mapFn Optional
 *      Map function to call on every element of the array.
 *
 *      thisArg Optional
 *      Value to use as this when executing mapFn.
 *
 * Return value
 * A new Array instance.
 *
 * Description
 * Array.from() lets you create Arrays from:
 *
 * array-like objects (objects with a length property and indexed elements); or
 * iterable objects (objects such as Map and Set).
 * Array.from() has an optional parameter mapFn, which allows you to execute a map() function on
 * each element of the array being created.
 *
 * More clearly, Array.from(obj, mapFn, thisArg)
 * has the same result as Array.from(obj).map(mapFn, thisArg),
 * except that it does not create an intermediate array.
 *
 * This is especially important for certain array subclasses, like typed arrays, since the intermediate
 * array would necessarily have values truncated to fit into the appropriate type.
 * The length property of the from() method is 1.
 *
 * In ES2015, the class syntax allows sub-classing of both built-in and user-defined classes. As a result, static
 * methods such as Array.from() are "inherited" by subclasses of Array, and create new instances of the subclass,
 * not Array.
 */
function test3() {
    test3_1();
    test3_2();
    test3_3();
    test3_5();
    test3_6();
    test3_7();
}

/**
 * Array from a String
 */
function test3_1() {
    var x = Array.from('foo');
    console.log(x);
    // [ 'f', 'o', 'o' ]
}

/**
 * Array from a Set
 */
function test3_2() {
    var set = new Set(['foo', 'bar', 'baz', 'foo']);
    var x = Array.from(set);
    console.log(x);
    // [ 'foo', 'bar', 'baz' ]
}

/**
 * Array from a Map
 */
function test3_3() {
    var map = new Map([[1, 2], [2, 4], [4, 8]]);
    var x1 = Array.from(map);
    console.log(x1);
    // [ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]

    var mapper = new Map([['1', 'a'], ['2', 'b']]);
    var x2 = Array.from(mapper.keys());
    console.log(x2);
    // [ '1', '2' ]

    var x3 = Array.from(mapper.values());
    console.log(x3);
    // [ 'a', 'b' ]
}

/**
 * Array from a NodeList
 */
function test3_4() {
    // Create an array based on a property of DOM Elements
    const images = document.getElementsByTagName('img');
    const sources = Array.from(images, image => image.src);
    const insecureSources = sources.filter(link => link.startsWith('http://'));
}

/**
 * Array from an Array-like object (arguments)
 */
function test3_5() {
    function f() {
        return Array.from(arguments)
    }

    console.log(f(1, 2, 3));
    // [ 1, 2, 3 ]
}

/**
 * Using arrow functions and Array.from()
 */
function test3_6() {
    // Using an arrow function as the map function to
    // manipulate the elements
    var x1 = Array.from([1, 2, 3], x => x + x);
    console.log(x1);
    // [ 2, 4, 6 ]

    // Generate a sequence of numbers
    // Since the array is initialized with `undefined` on each position,
    // the value of `v` below will be `undefined`
    var x2 = Array.from({length: 5}, (v, i) => i);
    console.log(x2);
    // [ 0, 1, 2, 3, 4 ]
}

/**
 * Sequence generator (range)
 */
function test3_7() {
    // Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
    const range = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));

    // Generate numbers range 0..4
    var x1 = range(0, 4, 1);
    console.log(x1);
    // [ 0, 1, 2, 3, 4 ]

    // Generate numbers range 1..10 with step of 2
    var x2 = range(1, 10, 2);
    console.log(x2);
    // [ 1, 3, 5, 7, 9 ]

    // Generate the alphabet using Array.from making use of it being ordered as a sequence
    var x3 = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
    console.log(x3);
    // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}

/**
 * Static methods
 *
 * Array.isArray()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 *
 * The Array.isArray() method determines whether the passed value is an Array.
 *
 * Syntax
 * Array.isArray(value)
 *
 * Parameters
 *      value
 *      The value to be checked.
 *
 * Return value
 * true if the value is an Array; otherwise, false.
 *
 * Description
 * If the value is an Array, true is returned; otherwise, false is.
 *
 * See the article “Determining with absolute accuracy whether or not a JavaScript object is an array” for
 * more details. Given a TypedArray instance, false is always returned.
 */
function test4() {
    // test4_1();
    // test4_2();
    test4_3();
}

/**
 * Polyfill
 * Running the following code before any other code will create Array.isArray() if it's not natively available.
 */
function test4_1() {
    if (!Array.isArray()) {
        Array.isArray = function (arg) {
            return Object.prototype.toString().call(arg) === '[object Array]';
        };
    }
}

function test4_2() {
    // all following calls return true
    console.log(Array.isArray([]));
    console.log(Array.isArray([1, 2, 3]));
    console.log(Array.isArray(new Array()));
    console.log(Array.isArray(new Array('a', 'b', 'c', 'd')));
    console.log(Array.isArray(new Array(3)));
    // Little known fact: Array.prototype itself is an array:
    Array.isArray(Array.prototype);

    console.log('--------------------');
    // all following calls return false
    console.log(Array.isArray());
    console.log(Array.isArray({}));
    console.log(Array.isArray({foo: 123}));
    console.log(Array.isArray(null));
    console.log(Array.isArray(undefined));
    console.log(Array.isArray(17));
    console.log(Array.isArray('foo'));
    console.log(Array.isArray('Array'));
    console.log(Array.isArray(true));
    console.log(Array.isArray(false));
    console.log(Array.isArray(new Uint8Array(32)));
    console.log(Array.isArray({__proto__: Array.prototype}));
}

/**
 * instanceof vs isArray
 * When checking for Array instance, Array.isArray is preferred over instanceof because it works through iframes.
 */
function test4_3() {
    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    xArray = window.frames[window.frames.length - 1].Array;
    var arr = new xArray(1, 2, 3); // [1,2,3]

    // Correctly checking for Array
    Array.isArray(arr);  // true
    // Considered harmful, because doesn't work through iframes
    arr instanceof Array; // false
}

/**
 * Static methods
 *
 * Array.of()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * The Array.of() method creates a new Array instance from a variable number of arguments,
 * regardless of number or type of the arguments.
 *
 * The difference between Array.of() and the Array constructor is in the handling of integer arguments:
 * Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length
 * property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values).
 *
 * Syntax
 * Array.of(element0[, element1[, ...[, elementN]]])
 *
 * Parameters
 *      elementN
 *      Elements used to create the array.
 * Return value
 * A new Array instance.
 *
 * Description
 * This function is part of the ECMAScript 2015 standard.
 *
 * For more information, see:
 *
 * Array.of()
 * Array.from() proposal
 * Array.of() polyfill
 */
function test5() {
    // test5_1();
    test5_2();
}

/**
 * Polyfill
 * Running the following code before any other code will create Array.of() if it's not natively available.
 */
function test5_1() {
    if (!Array.of) {
        Array.of = function () {
            return Array.prototype.slice.call(arguments);
            // Or
            let vals = [];
            for (let prop in arguments) {
                vals.push(arguments[prop]);
            }
            return vals;
        }
    }
}


function test5_2() {
    console.log(Array.of(1));
    // [ 1 ]
    console.log(Array.of(1, 2, 3));
    // [ 1, 2, 3 ]
    console.log(Array.of(undefined));
    // [ undefined ]
}

/**
 * Array.prototype.concat()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 *
 * The concat() method is used to merge two or more arrays. This method does not change the existing arrays,
 * but instead returns a new array.
 *
 * Syntax
 * const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
 *
 * Parameters
 *      valueN Optional
 *      Arrays and/or values to concatenate into a new array. If all valueN parameters are omitted, concat
 *      returns a shallow copy of the existing array on which it is called. See the description below for more details.
 *
 * Return value
 * A new Array instance.
 *
 * Description
 * The concat method creates a new array consisting of the elements in the object on which it is called,
 * followed in order by, for each argument, the elements of that argument (if the argument is an array)
 * or the argument itself (if the argument is not an array). It does not recurse into nested array arguments.
 *
 * The concat method does not alter this or any of the arrays provided as arguments but instead returns
 * a shallow copy that contains copies of the same elements combined from the original arrays. Elements
 * of the original arrays are copied into the new array as follows:
 *
 * Object references (and not the actual object): concat copies object references into the new array.
 * Both the original and new array refer to the same object. That is, if a referenced object is modified,
 * the changes are visible to both the new and original arrays. This includes elements of array arguments that are also arrays.
 * Data types such as strings, numbers and booleans (not String, Number, and Boolean objects): concat copies
 * the values of strings and numbers into the new array.
 * Note: Concatenating array(s)/value(s) will leave the originals untouched. Furthermore, any operation on the new
 * array (except operations on elements which are object references) will have no effect on the original arrays, and vice versa.
 */
function test6() {
    // test6_1();
    // test6_2();
    // test6_3();
    test6_4();
}

/**
 * Concatenating two arrays
 * The following code concatenates two arrays:
 */
function test6_1() {
    const letters = ['a', 'b', 'c'];
    const numbers = [1, 2, 3];
    var x = letters.concat(numbers);
    console.log(x);
    // [ 'a', 'b', 'c', 1, 2, 3 ]
}

/**
 * Concatenating three arrays
 * The following code concatenates three arrays:
 */
function test6_2() {
    const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const num3 = [7, 8, 9];

    var numbers = num1.concat(num2, num3);
    console.log(numbers);
    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

/**
 * Concatenating values to an array
 * The following code concatenates three values to an array:
 */
function test6_3() {
    const letters = ['a', 'b', 'c'];
    const alphaNumeric = letters.concat(1, [2, 3]);

    console.log(alphaNumeric);
    // results in ['a', 'b', 'c', 1, 2, 3]
}

/**
 * Concatenating nested arrays
 * The following code concatenates nested arrays and demonstrates retention of references:
 */
function test6_4() {
    const num1 = [[1]];
    const num2 = [2, [3]];

    var numbers = num1.concat(num2);
    console.log(numbers);
    // results in [[1], 2, [3]]

    // modify the first element of num1
    num1[0].push(4);

    console.log(numbers);
    // results in [[1, 4], 2, [3]]
}

/**
 * Array.prototype.copyWithin()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
 *
 * The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
 *
 * Syntax
 * arr.copyWithin(target[, start[, end]])
 *
 * Parameters
 *      target
 *      Zero-based index at which to copy the sequence to. If negative, target will be counted from the end.
 *      If target is at or greater than arr.length, nothing will be copied. If target is positioned after start,
 *      the copied sequence will be trimmed to fit arr.length.
 *
 *      start Optional
 *      Zero-based index at which to start copying elements from. If negative, start will be counted from the end.
 *      If start is omitted, copyWithin will copy from index 0.
 *
 *      end Optional
 *      Zero-based index at which to end copying elements from. copyWithin copies up to but not including end.
 *      If negative, end will be counted from the end.
 *      If end is omitted, copyWithin will copy until the last index (default to arr.length).
 *
 * Return value
 * The modified array.
 */
function test7() {
    // test7_1();
    test7_2();
}

function test7_1() {
    const array1 = ['a', 'b', 'c', 'd', 'e'];

    // copy to index 0 the element at index 3
    console.log(array1.copyWithin(0, 3, 4));
    // expected output: Array ["d", "b", "c", "d", "e"]

    // copy to index 1 all elements from index 3 to the end
    console.log(array1.copyWithin(1, 3));
    // expected output: Array ["d", "d", "e", "d", "e"]
}

function test7_2() {
    console.log([1, 2, 3, 4, 5].copyWithin(-2));
    // [1, 2, 3, 1, 2]

    console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
    // [4, 5, 3, 4, 5]

    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
    // [4, 2, 3, 4, 5]

    console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
    // [1, 2, 3, 3, 4]

    console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3));
    // {0: 1, 3: 1, length: 5}

    // ES2015 Typed Arrays are subclasses of Array
    var i32a = new Int32Array([1, 2, 3, 4, 5]);

    console.log(i32a.copyWithin(0, 2));
    // Int32Array [3, 4, 5, 4, 5]

    // On platforms that are not yet ES2015 compliant:
    console.log([].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4));
    // Int32Array [4, 2, 3, 4, 5]
}

/**
 * Array.prototype.entries()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
 *
 * The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
 *
 * Syntax
 *      array.entries()
 *
 * Return value
 * A new Array iterator object.
 */
function test8() {
    // test8_1();
    // test8_2();
    test8_3();
}

function test8_1() {
    const array1 = ['a', 'b', 'c'];

    const iterator1 = array1.entries();

    console.log(iterator1.next().value);
    // expected output: Array [0, "a"]

    console.log(iterator1.next().value);
    // expected output: Array [1, "b"]
}

/**
 * Iterating with index and element
 */
function test8_2() {
    const a = ['a', 'b', 'c'];

    for (const [index, element] of a.entries()) {
        console.log(index, element);
    }

    // 0 'a'
    // 1 'b'
    // 2 'c'
}

/**
 * Using a for…of loop
 */
function test8_3() {
    var a = ['a', 'b', 'c'];
    var iterator = a.entries();

    for (let e of iterator) {
        console.log(e);
    }
    // [0, 'a']
    // [1, 'b']
    // [2, 'c']
}

/**
 * Array.prototype.every()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 *
 * The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 *
 * Syntax
 * arr.every(callback(element[, index[, array]])[, thisArg])
 *
 * Parameters
 *      callback
 *      A function to test for each element, taking three arguments:
 *
 *          element
 *          The current element being processed in the array.
 *
 *          index Optional
 *          The index of the current element being processed in the array.
 *
 *          array Optional
 *          The array every was called upon.
 *
 *      thisArg Optional
 *      A value to use as this when executing callback.
 *
 * Return value
 * true if the callback function returns a truthy value for every array element. Otherwise, false.
 */
function test9() {
    // test9_1();
    // test9_2();
    // test9_3();
    test9_4();
}

function test9_1() {
    const isBelowThreshold = (currentValue) => currentValue < 40;

    const array1 = [1, 30, 39, 29, 10, 13];

    console.log(array1.every(isBelowThreshold));
    // expected output: true
}

/**
 * Testing size of all array elements
 * The following example tests whether all elements in the array are bigger than 10.
 */
function test9_2() {
    function isBigEnough(element, index, array) {
        return element >= 10;
    }

    var x1 = [12, 5, 8, 130, 44].every(isBigEnough);   // false
    console.log(x1);
    var x2 = [12, 54, 18, 130, 44].every(isBigEnough); // true
    console.log(x2);
}

/**
 * Using arrow functions
 * Arrow functions provide a shorter syntax for the same test.
 */
function test9_3() {
    var x1 = [12, 5, 8, 130, 44].every(x => x >= 10);   // false
    var x2 = [12, 54, 18, 130, 44].every(x => x >= 10); // true

    console.log(x1);
    console.log(x2);
}

/**
 * Affecting Initial Array (modifying, appending, and deleting)
 * The following examples tests the behaviour of the every method when the array is modified.
 */
function test9_4() {
    // test9_4_1();
    // test9_4_2();
    test9_4_3();
}

function test9_4_1() {
    // ---------------
    // Modifying items
    // ---------------
    let arr = [1, 2, 3, 4];
    arr.every((elem, index, arr) => {
        arr[index + 1] -= 1;
        console.log(`[${arr}][${index}] -> ${elem}`);
        return elem < 2;
    });

    // Loop runs for 3 iterations, but would
    // have run 2 iterations without any modification
    //
    // 1st iteration: [1,1,3,4][0] -> 1
    // 2nd iteration: [1,1,2,4][1] -> 1
    // 3rd iteration: [1,1,2,3][2] -> 2
}

function test9_4_2() {
    // ---------------
    // Appending items
    // ---------------
    arr = [1, 2, 3];
    arr.every((elem, index, arr) => {
        arr.push('new');
        console.log(`[${arr}][${index}] -> ${elem}`);
        return elem < 4;
    });

    // Loop runs for 3 iterations, even after appending new items
    //
    // 1st iteration: [1, 2, 3, new][0] -> 1
    // 2nd iteration: [1, 2, 3, new, new][1] -> 2
    // 3rd iteration: [1, 2, 3, new, new, new][2] -> 3
}

function test9_4_3() {
    // ---------------
    // Deleting items
    // ---------------
    arr = [1, 2, 3, 4];
    arr.every((elem, index, arr) => {
        arr.pop();
        console.log(`[${arr}][${index}] -> ${elem}`);
        return elem < 4;
    });

    // Loop runs for 2 iterations only, as the remaining
    // items are `pop()`ed off
    //
    // 1st iteration: [1,2,3][0] -> 1
    // 2nd iteration: [1,2][1] -> 2
}

/**
 * Array.prototype.fill()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
 *
 * See also
 * The fill() method changes all elements in an array to a static value, from a start index (default 0) to
 * an end index (default array.length). It returns the modified array.
 *
 * Syntax
 * arr.fill(value[, start[, end]])
 *
 * Parameters
 *      value
 *      Value to fill the array with. (Note all elements in the array will be this exact value.)
 *
 *      start Optional
 *      Start index, default 0.
 *
 *      end Optional
 *      End index, default arr.length.
 *
 * Return value
 * The modified array, filled with value.
 */
function test10() {
    // test10_1();
    test10_2();
}

function test10_1() {
    const array1 = [1, 2, 3, 4];

    // fill with 0 from position 2 until position 4
    console.log(array1.fill(0, 2, 4));
    // expected output: [1, 2, 0, 0]

    // fill with 5 from position 1
    console.log(array1.fill(5, 1));
    // expected output: [1, 5, 5, 5]

    console.log(array1.fill(6));
    // expected output: [6, 6, 6, 6]
}

function test10_2() {
    let x1 = [1, 2, 3].fill(4);                // [4, 4, 4]
    let x2 = [1, 2, 3].fill(4, 1);             // [1, 4, 4]
    let x3 = [1, 2, 3].fill(4, 1, 2);          // [1, 4, 3]
    let x4 = [1, 2, 3].fill(4, 1, 1);          // [1, 2, 3]
    let x5 = [1, 2, 3].fill(4, 3, 3);          // [1, 2, 3]
    let x6 = [1, 2, 3].fill(4, -3, -2);        // [4, 2, 3]
    let x7 = [1, 2, 3].fill(4, NaN, NaN);      // [1, 2, 3]
    let x8 = [1, 2, 3].fill(4, 3, 5);          // [1, 2, 3]
    let x9 = Array(3).fill(4);                 // [4, 4, 4]
    let x10 = [].fill.call({length: 3}, 4);   // {0: 4, 1: 4, 2: 4, length: 3}

    // A single object, referenced by each slot of the array:
    let arr = Array(3).fill({}); // [{}, {}, {}]
    let x11 = arr[0].hi = "hi";            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
    console.log(x1);
    console.log(x2);
    console.log(x3);
    console.log(x4);
    console.log(x5);
    console.log(x6);
    console.log(x7);
    console.log(x8);
    console.log(x9);
    console.log(x10);
    console.log(arr);
    console.log(x11);
}

/**
 * Array.prototype.filter()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 *
 * Syntax
 * let newArray = arr.filter(callback(currentValue[, index, [array]]) {
 * // return element for newArray, if true
 * }[, thisArg]);
 *
 * Parameters
 * callback
 * Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.
 *
 * It accepts three arguments:
 *
 *      currentValue
 *      The current element being processed in the array.
 *
 *      indexOptional
 *      The index of the current element being processed in the array.
 *
 *      arrayOptional
 *      The array filter was called upon.
 *
 * thisArgOptional
 * Value to use as this when executing callback.
 *
 * Return value
 * A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
 */
function test11() {
    // test11_1();
    // test11_2();
    // test11_3();
    // test11_4();
    // test11_5();
    test11_6();
}

function test11_1() {
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]
}

/**
 * Filtering out all small values
 * The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.
 */
function test11_2() {
    function isBigEnough(value) {
        return value >= 10;
    }

    var filters = [12, 5, 8, 130, 44].filter(isBigEnough);
    console.log(filters);
}

/**
 * Find all prime numbers in an array
 * The following example returns all prime numbers in the array:
 */
function test11_3() {
    const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    function isPrime(num) {
        for (let i = 2; num > i; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return num > 1;
    }

    console.log(array.filter(isPrime));
    // [ 2, 3, 5, 7, 11, 13 ]
}

/**
 * Filtering invalid entries from JSON
 * The following example uses filter() to create a filtered json of all elements with non-zero, numeric id.
 */
function test11_4() {
    let arr = [
        {id: 15},
        {id: -1},
        {id: 0},
        {id: 3},
        {id: 12.2},
        {},
        {id: null},
        {id: NaN},
        {id: 'undefined'}
    ];

    let invalidEntries = 0;

    function filterByID(item) {
        if (Number.isFinite(item.id) && item.id !== 0) {
            return true;
        }
        invalidEntries++;
        return false;
    }

    var arrByID = arr.filter(filterByID);
    console.log('Filtered Array\n', arrByID);
    // Filtered Array
    // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

    console.log('Number of Invalid Entries = ', invalidEntries)
    // Number of Invalid Entries = 5
}

/**
 * Searching in array
 * Following example uses filter() to filter array content based on search criteria.
 */
function test11_5() {
    let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

    /**
     * Filter array items based on search criteria (query)
     */
    function filterItems(arr, query) {
        return arr.filter(function (el) {
            return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
    }

    console.log(filterItems(fruits, 'ap'));
    console.log(filterItems(fruits, 'an'));
}

/**
 * ES2015 Implementation
 */
function test11_6() {
    const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

    /**
     * Filter array items based on search criteria (query)
     */
    const filterItems = (arr, query) => {
        return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    };

    console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
    console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
}

/**
 * Array.prototype.find()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 *
 * The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
 *
 * Syntax
 * arr.find(callback(element[, index[, array]])[, thisArg])
 *
 * Parameters
 * callback
 * Function to execute on each value in the array, taking 3 arguments:
 *
 *      element
 *      The current element in the array.
 *
 *      index Optional
 *      The index (position) of the current element in the array.
 *
 *      array Optional
 *      The array that find was called on.
 *
 * thisArg Optional
 * Object to use as this inside callback.
 *
 * Return value
 * The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
 *
 * (1).If you need the index of the found element in the array, use findIndex().
 *
 * (2).If you need to find the index of a value, use Array.prototype.indexOf(). (It’s similar to findIndex(),
 * but checks each element for equality with the value instead of using a testing function.)
 *
 * (3).If you need to find if a value exists in an array, use Array.prototype.includes(). Again, it checks each
 * element for equality with the value instead of using a testing function.
 *
 * (4).If you need to find if any element satisfies the provided testing function, use Array.prototype.some().
 *
 * Description
 * The find method executes the callback function once for each index of the array until the callback
 * returns a truthy value. If so, find immediately returns the value of that element. Otherwise, find returns undefined.
 *
 * callback is invoked for every index of the array, not just those with assigned values. This means it
 * may be less efficient for sparse arrays, compared to methods that only visit assigned values.
 *
 * If a thisArg parameter is provided to find, it will be used as the this value inside each invocation
 * of the callback. If it is not provided, then undefined is used.
 *
 * The find method does not mutate the array on which it is called, but the function provided to callback can.
 * If so, the elements processed by find are set before the first invocation of callback. Therefore:
 *
 * callback will not visit any elements added to the array after the call to find begins.
 * If an existing, yet-unvisited element of the array is changed by callback, its value passed to the callback
 * will be the value at the time find visits that element's index.
 * Elements that are deleted are still visited.
 */
function test12() {
    // test12_1();
    // test12_2();
    // test12_3();
    // test12_4();
    test12_5();
}

function test12_1() {
    const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(element => element > 10);

    console.log(found);
    // expected output: 12
}

/**
 * Find an object in an array by one of its properties
 */
function test12_2() {
    const inventory = [
        {name: 'apples', quantity: 2},
        {name: 'bananas', quantity: 0},
        {name: 'cherries', quantity: 5}
    ];

    function isCherries(fruit) {
        return fruit.name === 'cherries';
    }

    console.log(inventory.find(isCherries));
}

/**
 * Using arrow function and destructuring
 */
function test12_3() {
    const inventory = [
        {name: 'apples', quantity: 2},
        {name: 'bananas', quantity: 0},
        {name: 'cherries', quantity: 5}
    ];

    var result = inventory.find(({name}) => name === 'cherries');
    console.log(result);
    // { name: 'cherries', quantity: 5 }
}

/**
 * Find a prime number in an array
 * The following example finds an element in the array that is a prime number (or returns undefined if there is no prime number):
 */
function test12_4() {
    function isPrime(element, index, array) {
        let start = 2;
        while (start <= Math.sqrt(element)) {
            if (element % start++ < 1) {
                return false;
            }
        }
        return element > 1;
    }

    console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
    console.log([4, 5, 8, 12].find(isPrime)); // 5
}

/**
 * The following examples show that nonexistent and deleted elements are visited,
 * and that the value passed to the callback is their value when visited:
 */
function test12_5() {
    // Declare array with no elements at indexes 2, 3, and 4
    const array = [0, 1, , , , 5, 6];

    // Shows all indexes, not just those with assigned values
    array.find(function (value, index) {
        console.log('Visited index ', index, ' with value ', value);
    });

    // Shows all indexes, including deleted
    array.find(function (value, index) {
        // Delete element 5 on first iteration
        if (index === 0) {
            console.log('Deleting array[5] with value ', array[5]);
            delete array[5];
        }
        // Element 5 is still visited even though deleted
        console.log('Visited index ', index, ' with value ', value);
    });
    // expected output:
    // Deleting array[5] with value 5
    // Visited index 0 with value 0
    // Visited index 1 with value 1
    // Visited index 2 with value undefined
    // Visited index 3 with value undefined
    // Visited index 4 with value undefined
    // Visited index 5 with value undefined
    // Visited index 6 with value 6
}

/**
 * Array.prototype.findIndex()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 *
 * The findIndex() method returns the index of the first element in the array that satisfies the
 * provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
 *
 * Syntax
 * arr.findIndex(callback( element[, index[, array]] )[, thisArg])
 *
 * Parameters
 * callback
 * A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
 *
 * It takes three arguments:
 *
 *      element
 *      The current element being processed in the array.
 *
 *      index Optional
 *      The index of the current element being processed in the array.
 *
 *      array Optional
 *      The array findIndex() was called upon.
 *
 * thisArg Optional
 * Optional object to use as this when executing callback.
 *
 * Return value
 * The index of the first element in the array that passes the test. Otherwise, -1.
 */
function test13() {
    // test13_1();
    // test13_2();
    test13_3();
}

function test13_1() {
    const array1 = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => element > 13;

    console.log(array1.findIndex(isLargeNumber));
    // expected output: 3
}

/**
 * Find the index of a prime number in an array
 * The following example returns the index of the first element in the array that is a prime number, or -1 if there is no prime number.
 */
function test13_2() {
    function isPrime(num) {
        for (let i = 2; num > i; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return num > 1;
    }

    console.log([4, 6, 8, 9, 12].findIndex(isPrime));
    console.log([4, 6, 7, 9, 12].findIndex(isPrime));
}

/**
 * Find index using arrow function
 * The following example finds the index of a fruit using an arrow function:
 */
function test13_3() {
    const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
    var index = fruits.findIndex(fruits => fruits === 'blueberries');

    console.log(index);
    console.log(fruits[index]);
}

/**
 * Array.prototype.forEach()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * The forEach() method executes a provided function once for each array element.
 *
 * Syntax
 * arr.forEach(callback(currentValue[, index[, array]]) {
 *   // execute something
 * }[, thisArg]);
 *
 * Parameters
 * callback
 * Function to execute on each element. It accepts between one and three arguments:
 *      currentValue
 *      The current element being processed in the array.
 *
 *      index Optional
 *      The index of currentValue in the array.
 *
 *      array Optional
 *      The array forEach() was called upon.
 *
 * thisArg Optional
 * Value to use as this when executing callback.
 *
 * Return value
 * undefined.
 */
function test14() {
    // test14_1();
    // test14_2();
    // test14_3();
    // test14_4();
    // test14_5();
    // test14_6();
    // test14_7();
    test14_8();
}

function test14_1() {
    const array1 = ['a', 'b', 'c'];

    array1.forEach(element => console.log(element));
}

/**
 * No operation for uninitialized values (sparse arrays)
 */
function test14_2() {
    const arraySparse = [1, 3, 7];
    let numCallbackRuns = 0;

    arraySparse.forEach(element => {
        console.log(element);
        numCallbackRuns++;
    });

    console.log("numCallbackRuns: ", numCallbackRuns);
    // 1
    // 3
    // 7
    // numCallbackRuns: 3
    // comment: as you can see the missing value between 3 and 7 didn't invoke callback function.
}

/**
 * Converting a for loop to forEach
 */
function test14_3() {
    const items = ['item1', 'item2', 'item3'];
    const copyItems = [];

    // before
    for (let i = 0; i < items.length; i++) {
        copyItems.push(items[i]);
    }
    console.log(copyItems);
    // [ 'item1', 'item2', 'item3' ]

    // after
    items.forEach(function (item) {
        copyItems.push(item);
    });
    console.log(copyItems);
    // [ 'item1', 'item2', 'item3', 'item1', 'item2', 'item3' ]
}

/**
 * Printing the contents of an array
 *
 * Note: In order to display the content of an array in the console, you can use console.table(),
 * which prints a formatted version of the array.
 *
 * The following example illustrates an alternative approach, using forEach().
 *
 * The following code logs a line for each element in an array:
 */
function test14_4() {
    function logArrayElements(element, index, array) {
        console.log('a[' + index + '] = ' + element);
    }

    // Notice that index 2 is skipped, since there is no item at
    // that position in the array...
    [2, 5, , 9].forEach(logArrayElements);
    // logs:
    // a[0] = 2
    // a[1] = 5
    // a[3] = 9
}

/**
 * Using thisArg
 * The following (contrived) example updates an object's properties from each entry in the array:
 *
 * Since the thisArg parameter (this) is provided to forEach(), it is passed to callback each time it's invoked.
 * The callback uses it as its this value.
 *
 * Note: If passing the callback function uses an arrow function expression, the thisArg parameter can be omitted,
 * since all arrow functions lexically bind the this value.
 */
function test14_5() {
    function Counter() {
        this.sum = 0;
        this.count = 0;
    }

    Counter.prototype.add = function (array) {
        array.forEach((entry) => {
            this.sum += entry;
            ++this.count;
        }, this);
        // ^---- Note
    };

    var counter = new Counter();
    counter.add([2, 5, 9]);

    console.log(counter.count);
    console.log(counter.sum);
}

/**
 * An object copy function
 * The following code creates a copy of a given object.
 *
 * There are different ways to create a copy of an object. The following is just one way and is presented to explain
 * how Array.prototype.forEach() works by using ECMAScript 5 Object.* meta property functions.
 */
function test14_6() {
    function copy(obj) {
        const propNames = Object.getOwnPropertyNames(obj)
        const copy = Object.create(Object.getPrototypeOf(obj));


        propNames.forEach((name) => {
            const desc = Object.getOwnPropertyDescriptor(obj, name);
            Object.defineProperty(copy, name, desc);
        });

        return copy
    }

    const arr1 = {a: 1, b: 2};
    console.log(arr1);

    var arr2 = copy(arr1);// obj2 looks like obj1 now
    console.log(arr2);
}

/**
 * Modifying the array during iteration
 *
 * The following example logs one, two, four.
 *
 * When the entry containing the value two is reached, the first entry of the whole array is shifted off—resulting
 * in all remaining entries moving up one position. Because element four is now at an earlier position in the array,
 * three will be skipped.
 *
 * forEach() does not make a copy of the array before iterating.
 */
function test14_7() {
    let words = ['one', 'two', 'three', 'four'];
    words.forEach((word) => {
        console.log(word);
        if (word === 'two') {
            words.shift();//'one' will delete from array
        }
    });// one // two ​​​​// four

    console.log(words);
}

/**
 * Flatten an array
 * The following example is only here for learning purpose. If you want to flatten an array
 * using built-in methods you can use Array.prototype.flat().
 */
function test14_8() {
    function flatten(arr) {
        const result = [];

        arr.forEach((i) => {
            if (Array.isArray(i)) {
                result.push(...flatten(i))
            } else {
                result.push(i)
            }
        });

        return result;
    }

    // Usage
    const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

    console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

/**
 * Array.prototype.includes()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 *
 * The includes() method determines whether an array includes a certain value among its entries,
 * returning true or false as appropriate.
 *
 * Syntax
 * arr.includes(valueToFind[, fromIndex])
 *
 * Parameters
 * valueToFind
 * The value to search for.
 *
 * Note: When comparing strings and characters, includes() is case-sensitive.
 *
 * fromIndex Optional
 * The position in this array at which to begin searching for valueToFind.
 * The first element to be searched is found at fromIndex for positive values of fromIndex, or at arr.length + fromIndex
 * for negative values of fromIndex (using the absolute value of fromIndex as the number of elements from the end of the
 * array at which to start the search).
 * Defaults to 0.
 *
 * Return value
 * A Boolean which is true if the value valueToFind is found within the array (or the part of the array indicated
 * by the index fromIndex, if specified).
 *
 * Values of zero are all considered to be equal, regardless of sign. (That is, -0 is considered to be equal to
 * both 0 and +0), but false is not considered to be the same as 0.
 *
 * Note: Technically speaking, includes() uses the sameValueZero algorithm to determine whether the given element is found.
 */
function test15() {
    // test15_1();
    // test15_2();
    // test15_3();
    // test15_4();
    test15_5();
}

function test15_1() {
    const array1 = [1, 2, 3];
    console.log(array1.includes(2));
    // expected output: true

    const pets = ['cat', 'dog', 'bat'];
    console.log(pets.includes('cat'));
    // expected output: true

    console.log(pets.includes('abc'));
    // expected output: false
}

function test15_2() {
    console.log([1, 2, 3].includes(2));      // true
    console.log([1, 2, 3].includes(4));      // false
    console.log([1, 2, 3].includes(3, 3));   // false
    console.log([1, 2, 3].includes(3, -1));  // true
    console.log([1, 2, NaN].includes(NaN));  // true
}

/**
 * fromIndex is greater than or equal to the array length
 * If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.
 */
function test15_3() {
    let arr = ['a', 'b', 'c'];

    console.log(arr.includes('c', 3));    // false
    console.log(arr.includes('c', 100));  // false
}

/**
 * Computed index is less than 0
 *
 * If fromIndex is negative, the computed index is calculated to be used as a position in the array at which to begin
 * searching for valueToFind. If the computed index is less or equal than -1 * arr.length, the entire array will be searched.
 */
function test15_4() {
    // array length is 3
    // fromIndex is -100
    // computed index is 3 + (-100) = -97

    let arr = ['a', 'b', 'c'];

    console.log(arr.includes('a', -100)); // true
    console.log(arr.includes('b', -100)); // true
    console.log(arr.includes('c', -100)); // true
    console.log(arr.includes('a', -2));   // false
}

/**
 * includes() used as a generic method
 *
 * includes() method is intentionally generic. It does not require this value to be an Array object,
 * so it can be applied to other kinds of objects (e.g. array-like objects).
 *
 * The example below illustrates includes() method called on the function's arguments object.
 */
function test15_5() {
    (function () {
        console.log(Array.prototype.includes.call(arguments, 'a'));  // true
        console.log(Array.prototype.includes.call(arguments, 'd'));  // false
    })('a', 'b', 'c');
}

/**
 * Array.prototype.indexOf()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 * The indexOf() method returns the first index at which a given element can be found in the array,
 * or -1 if it is not present.
 *
 * Syntax
 * arr.indexOf(searchElement[, fromIndex])
 *
 * Parameters
 *      searchElement
 *      Element to locate in the array.
 *
 * fromIndex Optional
 * The index to start the search at. If the index is greater than or equal to the array's length,
 * -1 is returned, which means the array will not be searched. If the provided index value is a negative
 * number, it is taken as the offset from the end of the array. Note: if the provided index is negative,
 * the array is still searched from front to back. If the provided index is 0, then the whole array will
 * be searched. Default: 0 (entire array is searched).
 *
 * Return value
 * The first index of the element in the array; -1 if not found.
 *
 * Description
 * indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).
 *
 * Note: For the String method, see String.prototype.indexOf().
 */
function test16() {
    // test16_1();
    // test16_2();
    // test16_3();
    test16_4();
}

function test16_1() {
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    console.log(beasts.indexOf('bison'));
    // expected output: 1

    // start from index 2
    console.log(beasts.indexOf('bison', 2));
    // expected output: 4

    console.log(beasts.indexOf('giraffe'));
    // expected output: -1
}

/**
 * Using indexOf()
 * The following example uses indexOf() to locate values in an array.
 */
function test16_2() {
    var array = [2, 9, 9];
    console.log(array.indexOf(2));     // 0
    console.log(array.indexOf(7));     // -1
    console.log(array.indexOf(9, 2));  // 2
    console.log(array.indexOf(2, -1)); // -1
    console.log(array.indexOf(2, -3)); // 0
}

/**
 * Finding all the occurrences of an element
 */
function test16_3() {
    var indices = [];
    var array = ['a', 'b', 'a', 'c', 'a', 'd'];
    var element = 'a';
    var idx = array.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
    }

    console.log(indices);
    // [0, 2, 4]
}

/**
 * Finding if an element exists in the array or not and updating the array
 */
function test16_4() {
    function updateVegetablesCollection(veggies, veggie) {
        if (veggies.indexOf(veggie) === -1) {
            veggies.push(veggie);
            console.log('New veggies collection is : ' + veggies);
        } else if (veggies.indexOf(veggie) > -1) {
            console.log(veggie + ' already exists in the veggies collection.');
        }
    }

    var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

    updateVegetablesCollection(veggies, 'spinach');
    // New veggies collection is : potato,tomato,chillies,green-pepper,spinach
    updateVegetablesCollection(veggies, 'spinach');
    // spinach already exists in the veggies collection.
}

/**
 * Array.prototype.join()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 *
 * The join() method creates and returns a new string by concatenating all of the elements in an
 * array (or an array-like object), separated by commas or a specified separator string. If the
 * array has only one item, then that item will be returned without using the separator.
 *
 * Syntax
 * arr.join([separator])
 *
 * Parameters
 *      separator Optional
 *      Specifies a string to separate each pair of adjacent elements of the array. The separator is converted
 *      to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator
 *      is an empty string, all elements are joined without any characters in between them.
 *
 * Return value
 * A string with all array elements joined. If arr.length is 0, the empty string is returned.
 *
 * Description
 * The string conversions of all array elements are joined into one string.
 *
 * If an element is undefined, null or an empty array [], it is converted to an empty string.
 */
function test17() {
    // test17_1();
    // test17_2();
    test17_3();
}

function test17_1() {
    const elements = ['Fire', 'Air', 'Water'];

    console.log(elements.join());
    // expected output: "Fire,Air,Water"

    console.log(elements.join(''));
    // expected output: "FireAirWater"

    console.log(elements.join('-'));
    // expected output: "Fire-Air-Water"
}

/**
 * Joining an array four different ways
 * The following example creates an array, a, with three elements, then joins the array four times:
 * using the default separator, then a comma and a space, then a plus and an empty string.
 */
function test17_2() {
    var a = ['Wind', 'Water', 'Fire'];
    console.log(a.join());      // 'Wind,Water,Fire'
    console.log(a.join(', '));  // 'Wind, Water, Fire'
    console.log(a.join(' + ')); // 'Wind + Water + Fire'
    console.log(a.join(''));    // 'WindWaterFire'
}

/**
 * Joining an array-like object
 * The following example joins array-like object (arguments), by calling Function.prototype.call on Array.prototype.join.
 */
function test17_3() {
    function f(a, b, c) {
        var s = Array.prototype.join.call(arguments);
        console.log(s); // '1,a,true'
    }

    f(1, 'a', true);
    //expected output: "1,a,true"
}

/**
 * Array.prototype.keys()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
 *
 * The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
 *
 * Syntax
 * arr.keys()
 *
 * Return value
 * A new Array iterator object.
 */
function test18() {
    // test18_1();
    test18_2();
}

function test18_1() {
    const array1 = ['a', 'b', 'c'];
    var iterator = array1.keys();

    for (const key of iterator) {
        console.log(key);
    }
}

/**
 * Key iterator doesn't ignore holes
 */
function test18_2() {
    var arr = ['a', , 'c'];
    var sparseKeys = Object.keys(arr);
    var denseKeys = [...arr.keys()];
    console.log(sparseKeys); // ['0', '2']
    console.log(denseKeys);  // [0, 1, 2]

}

/**
 * Array.prototype.lastIndexOf()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
 *
 * The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if
 * it is not present. The array is searched backwards, starting at fromIndex.
 *
 * Syntax
 * arr.lastIndexOf(searchElement[, fromIndex])
 *
 * Parameters
 *      searchElement
 *      Element to locate in the array.
 *
 *      fromIndex Optional
 *      The index at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), i.e.
 *      the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array
 *      will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative,
 *      the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.
 *
 * Return value
 * The last index of the element in the array; -1 if not found.
 *
 * Description
 * lastIndexOf compares searchElement to elements of the Array using strict equality (the same method used by the ===, or triple-equals, operator).
 */
function test19() {
    // test19_1();
    // test19_2();
    test19_3();
}

function test19_1() {
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

    console.log(animals.lastIndexOf('Dodo'));
    // expected output: 3

    console.log(animals.lastIndexOf('Tiger'));
    // expected output: 1
}

/**
 * Using lastIndexOf
 * The following example uses lastIndexOf to locate values in an array.
 */
function test19_2() {
    var numbers = [2, 5, 9, 2];
    console.log(numbers.lastIndexOf(2));     // 3
    console.log(numbers.lastIndexOf(7));     // -1
    console.log(numbers.lastIndexOf(2, 3));  // 3
    console.log(numbers.lastIndexOf(2, 2));  // 0
    console.log(numbers.lastIndexOf(2, -2)); // 0
    console.log(numbers.lastIndexOf(2, -1)); // 3
}

/**
 * Finding all the occurrences of an element
 * The following example uses lastIndexOf to find all the indices of an element in a given array,
 * using push to add them to another array as they are found.
 *
 * Note that we have to handle the case idx == 0 separately here because the element will always be
 * found regardless of the fromIndex parameter if it is the first element of the array. This is
 * different from the indexOf method.
 */
function test19_3() {
    var indices = [];
    var array = ['a', 'b', 'a', 'c', 'a', 'd'];
    var element = 'a';
    var idx = array.lastIndexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
    }

    console.log(indices);
    // [4, 2, 0]
}

/**
 * Array.prototype.map()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 *
 * Syntax
 * let newArray = arr.map(callback(currentValue[, index[, array]]) {
 * // return element for newArray, after executing something
 * }[, thisArg]);
 *
 * Parameters
 * callback
 * Function that is called for every element of arr. Each time callback executes, the returned value is added to new_array.
 *
 * The callback function accepts the following arguments:
 *
 *      currentValue
 *      The current element being processed in the array.
 *
 *      index Optional
 *      The index of the current element being processed in the array.
 *
 *      array Optional
 *      The array map was called upon.
 *
 * thisArg Optional
 * Value to use as this when executing callback.
 *
 * Return value
 * A new array with each element being the result of the callback function.
 */
function test20() {
    // test20_1();
    // test20_2();
    // test20_3();
    // test20_4();
    // test20_5();
    test20_6();
}

function test20_1() {
    const array1 = [1, 4, 9, 16];

    // pass a function to map
    var map = array1.map(x => x * 2);

    // expected output: Array [2, 8, 18, 32]
    console.log(map);
}

/**
 * Mapping an array of numbers to an array of square roots
 * The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.
 */
function test20_2() {
    let numbers = [1, 4, 9];
    let roots = numbers.map(function (num) {
        return Math.sqrt(num);
    });

    console.log(roots);
    // [ 1, 2, 3 ]
}

/**
 * Using map to reformat objects in an array
 * The following code takes an array of objects and creates a new array containing the newly reformatted objects.
 */
function test20_3() {
    let kvArray = [{key: 1, value: 10}, {key: 2, value: 20}, {key: 3, value: 30}];
    let reformattedArray = kvArray.map(obj => {
        let rObj = {};
        rObj[obj.key] = obj.value;
        return rObj;
    });

    console.log(reformattedArray);
    console.log(kvArray);
    // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

    // kvArray is still:
    // [{key: 1, value: 10},
    //  {key: 2, value: 20},
    //  {key: 3, value: 30}]
}

/**
 * Mapping an array of numbers using a function containing an argument
 * The following code shows how map works when a function requiring one argument is used with it.
 * The argument will automatically be assigned from each element of the array as map loops through
 * the original array.
 */
function test20_4() {
    let numbers = [1, 4, 9];
    let doubles = numbers.map(function (num) {
        return num * 2;
    });

    console.log(doubles);
    console.log(numbers);
// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]
}

/**
 * Using map generically
 * This example shows how to use map on a String to get an array of bytes in the ASCII encoding representing the character values:
 */
function test20_5() {
    let map = Array.prototype.map;
    let a = map.call('Hello World', function (x) {
        return x.charCodeAt(0);
    });

    console.log(a);
    // a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
}

/**
 * Using map generically querySelectorAll
 * This example shows how to iterate through a collection of objects collected by querySelectorAll.
 * This is because querySelectorAll returns a NodeList (which is a collection of objects).
 *
 * In this case, we return all the selected options' values on the screen:
 */
function test20_6() {
    let elems = document.querySelectorAll('select option:checked');
    let values = Array.prototype.map.call(elems, function (obj) {
        return obj.value;
    });
}

/**
 * Array.prototype.pop()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 *
 * The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
 *
 * Syntax
 * arrName.pop()
 *
 * Return value
 * The removed element from the array; undefined if the array is empty.
 *
 * Description
 * The pop method removes the last element from an array and returns that value to the caller.
 *
 * pop is intentionally generic; this method can be called or applied to objects resembling arrays.
 * Objects which do not contain a length property reflecting the last in a series of consecutive,
 * zero-based numerical properties may not behave in any meaningful manner.
 *
 * If you call pop() on an empty array, it returns undefined.
 *
 * Array.prototype.shift() has similar behavior to pop, but applied to the first element in an array.
 */
function test21() {
    // test21_1();
    // test21_2();
    test21_3();
}

function test21_1() {
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    console.log(plants.pop());
    console.log(plants);

    console.log(plants.pop());
    console.log(plants);
}

/**
 * Removing the last element of an array
 * The following code creates the myFish array containing four elements, then removes its last element.
 */
function test21_2() {
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

    var popped = myFish.pop();

    console.log(myFish); // ['angel', 'clown', 'mandarin' ]

    console.log(popped); // 'sturgeon'
}

/**
 * Using apply( ) or call ( ) on array-like objects
 * The following code creates the myFish array-like object containing four elements and a length parameter,
 * then removes its last element and decrements the length parameter.
 */
function test21_3() {
    var myFish = {0: 'angel', 1: 'clown', 2: 'mandarin', 3: 'sturgeon', length: 4};

    var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )

    console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

    console.log(popped); // 'sturgeon'
}

/**
 * Array.prototype.push()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 *
 * The push() method adds one or more elements to the end of an array and returns the new length of the array.
 *
 * Syntax
 * arr.push([element1[, ...[, elementN]]])
 *
 * Parameters
 *      elementN
 *      The element(s) to add to the end of the array.
 *
 * Return value
 * The new length property of the object upon which the method was called.
 *
 * Description
 * The push method appends values to an array.
 *
 * push is intentionally generic. This method can be used with call() or apply() on objects resembling arrays.
 * The push method relies on a length property to determine where to start inserting the given values. If the
 * length property cannot be converted into a number, the index used is 0. This includes the possibility of
 * length being nonexistent, in which case length will also be created.
 *
 * Although strings are native, Array-like objects, they are not suitable in applications of this method, as strings
 * are immutable.  Similarly for the native, Array-like object arguments.
 */
function test22() {
    // test22_1();
    // test22_2();
    // test22_3();
    test22_4();
}

function test22_1() {
    const animals = ['pigs', 'goats', 'sheep'];

    const count = animals.push('cows');
    console.log(count);
    // expected output: 4
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows"]

    animals.push('chickens', 'cats', 'dogs');
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
}

/**
 * Adding elements to an array
 * The following code creates the sports array containing two elements, then appends two elements to it.
 * The total variable contains the new length of the array.
 */
function test22_2() {
    let sports = ['soccer', 'baseball'];
    let total = sports.push('football', 'swimming');

    console.log(sports);  // ['soccer', 'baseball', 'football', 'swimming']
    console.log(total);   // 4
}

/**
 * Merging two arrays
 * This example uses apply() to push all elements from a second array.
 *
 * Do not use this method if the second array (moreVegs in the example) is very large because the maximum number
 * of parameters that one function can take is limited in practice. See apply() for more details.
 */
function test22_3() {
    let vegetables = ['parsnip', 'potato'];
    let moreVegs = ['celery', 'beetroot'];

    // Merge the second array into the first one
    // Equivalent to vegetables.push('celery', 'beetroot')
    Array.prototype.push.apply(vegetables, moreVegs);

    console.log(vegetables);  // ['parsnip', 'potato', 'celery', 'beetroot']
}

/**
 * Using an object in an array-like fashion
 * As mentioned above, push is intentionally generic, and we can use that to our advantage.
 * Array.prototype.push can work on an object just fine, as this example shows.
 *
 * Note that we don't create an array to store a collection of objects. Instead, we store the collection
 * on the object itself and use call on Array.prototype.push to trick the method into thinking we are
 * dealing with an array—and it just works, thanks to the way JavaScript allows us to establish the
 * execution context in any way we want.
 *
 * Note that although obj is not an array, the method push successfully incremented obj's length property
 * just like if we were dealing with an actual array.
 */
function test22_4() {
    let obj = {
        length: 0,

        addElem: function addElem(elem) {
            // obj.length is automatically incremented
            // every time an element is added.
            [].push.call(this, elem);
        }
    };

    // Let's add some empty objects just to illustrate.
    obj.addElem({});
    obj.addElem({});
    console.log(obj.length);
    console.log(obj);
    // → 2
}

/**
 * Array.prototype.reduce()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 *
 * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
 *
 * The reducer function takes four arguments:
 *
 * Accumulator (acc)
 * Current Value (cur)
 * Current Index (idx)
 * Source Array (src)
 * Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each
 * iteration throughout the array, and ultimately becomes the final, single resulting value.
 *
 * Syntax
 * arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
 * // return result from executing something for accumulator or currentValue
 * }[, initialValue]);
 *
 * Parameters
 * callback
 * A function to execute on each element in the array (except for the first, if no initialValue is supplied).
 *
 * It takes four arguments:
 *
 *      accumulator
 *      The accumulator accumulates callback's return values. It is the accumulated value previously returned
 *      in the last invocation of the callback—or initialValue, if it was supplied (see below).
 *
 *      currentValue
 *      The current element being processed in the array.
 *
 *      index Optional
 *      The index of the current element being processed in the array. Starts from index 0 if an initialValue
 *      is provided. Otherwise, it starts from index 1.
 *
 *      array Optional
 *      The array reduce() was called upon.
 *
 *      initialValue Optional
 *      A value to use as the first argument to the first call of the callback. If no initialValue is supplied,
 *      the first element in the array will be used as the initial accumulator value and skipped as currentValue.
 *      Calling reduce() on an empty array without an initialValue will throw a TypeError.
 *
 * Return value
 * The single value that results from the reduction.
 */
function test23() {
    // test23_1();
    // test23_2();
    // test23_3();
    // test23_4();
    // test23_5();
    // test23_6();
    // test23_7();
    // test23_8();
    // test23_9();
    // test23_10();
    // test23_11();
    // test23_12();
    // test23_13();
    // test23_14();
    test23_15();
}

function test23_1() {
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => (accumulator + currentValue);

    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    // expected output: 10

    // 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    // expected output: 15
}

/**
 * Sum all the values of an array
 */
function test23_2() {
    let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    console.log(sum);
}

/**
 * Alternatively written with an arrow function:
 */
function test23_3() {
    let sum = [0, 1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);
}

/**
 * Sum of values in an object array
 * To sum up, the values contained in an array of objects, you must supply an initialValue,
 * so that each item passes through your function.
 */
function test23_4() {
    let initialValue = 0;
    let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.x;
    }, initialValue);

    console.log(sum); // logs 6
}

/**
 * Alternatively written with an arrow function:
 */
function test23_5() {
    let initialValue = 0;
    let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
        (accumulator, currentValue) => accumulator + currentValue.x
        , initialValue
    );

    console.log(sum); // logs 6
}

/**
 * Flatten an array of arrays
 */
function test23_6() {
    let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
        function (accumulator, currentValue) {
            return accumulator.concat(currentValue);
        },
        []
    );

    console.log(flattened);
    // flattened is [0, 1, 2, 3, 4, 5]
}

/**
 * Alternatively written with an arrow function:
 */
function test23_7() {
    let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
        (accumulator, currentValue) => accumulator.concat(currentValue),
        []
    );

    console.log(flattened);
}

/**
 * Counting instances of values in an object
 */
function test23_8() {
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

    let countedNames = names.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++;
        } else {
            allNames[name] = 1;
        }
        return allNames;
    }, {});

    console.log(countedNames);
}

/**
 * Grouping objects by a property
 */
function test23_9() {
    let people = [
        {name: 'Alice', age: 21},
        {name: 'Max', age: 20},
        {name: 'Jane', age: 20}
    ];

    function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
            let key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    var groupedPeople = groupBy(people, 'age');
    console.log(groupedPeople);
    // groupedPeople is:
    // {
    //   20: [
    //     { name: 'Max', age: 20 },
    //     { name: 'Jane', age: 20 }
    //   ],
    //   21: [{ name: 'Alice', age: 21 }]
    // }
}

/**
 * Bonding arrays contained in an array of objects using the spread operator and initialValue
 */
function test23_10() {
    // friends - an array of objects
    // where object field "books" is a list of favorite books
    let friends = [{
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
    }, {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
    }, {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
    }];

    // allbooks - list which will contain all friends' books +
    // additional list contained in initialValue
    let allbooks = friends.reduce(function (accumulator, currentValue) {
        return [...accumulator, ...currentValue.books];
    }, ['Alphabet']);

    console.log(allbooks);
    // allbooks = [
    //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
    //   'Romeo and Juliet', 'The Lord of the Rings',
    //   'The Shining'
    // ]
}

/**
 * Remove duplicate items in an array
 * Note: If you are using an environment compatible with Set and Array.from(), you could use let
 * orderedArray = Array.from(new Set(myArray)) to get an array where duplicate items have been removed.
 */
function test23_11() {
    let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
    var myOrderArray = myArray.reduce(function (accumulator, currentValue) {
        if (accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
    console.log(myOrderArray);
    // [ 'a', 'b', 'c', 'e', 'd' ]
}

/**
 * Replace .filter().map() with .reduce()
 * Using Array.filter() then Array.map() traverses the array twice, but you can achieve the same effect
 * while traversing only once with Array.reduce(), thereby being more efficient. (If you like for loops,
 * you can filter and map while traversing once with Array.forEach()).
 */
function test23_12() {
    const numbers = [-5, 6, 2, 0,];

    const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
        if (currentValue > 0) {
            const doubled = currentValue * 2;
            accumulator.push(doubled);
        }
        return accumulator;
    }, []);

    console.log(doubledPositiveNumbers);
    // [ 12, 4 ]
}

/**
 * Running Promises in Sequence
 */
function test23_13() {
    /*
     * Runs promises from array of functions that can return promises
     * in chained manner
     *
     * @param {array} arr - promise arr
     * @return {Object} promise object
     */
    function runPromiseInSequence(arr, input) {
        return arr.reduce(
            (promiseChain, currentFunction) => promiseChain.then(currentFunction),
            Promise.resolve(input)
        )
    }

    // promise function 1
    function p1(a) {
        return new Promise((resolve, reject) => {
            resolve(a * 5)
        })
    }

    // promise function 2
    function p2(a) {
        return new Promise((resolve, reject) => {
            resolve(a * 2)
        })
    }

    // function 3  - will be wrapped in a resolved promise by .then()
    function f3(a) {
        return a * 3
    }

    // promise function 4
    function p4(a) {
        return new Promise((resolve, reject) => {
            resolve(a * 4)
        })
    }

    const promiseArr = [p1, p2, f3, p4];
    runPromiseInSequence(promiseArr, 10)
        .then(console.log);   // 1200
}

/**
 * Function composition enabling piping
 */
function test23_14() {
    // Building-blocks to use for composition
    const double = x => x + x;
    const triple = x => 3 * x;
    const quadruple = x => 4 * x;

    // Function composition enabling pipe functionality
    const pipe = (...functions) => input => functions.reduce(
        (acc, fn) => fn(acc),
        input
    );

    // Composed functions for multiplication of specific values
    const multiply6 = pipe(double, triple);
    const multiply9 = pipe(triple, triple);
    const multiply16 = pipe(quadruple, quadruple);
    const multiply24 = pipe(double, triple, quadruple);

    // Usage
    console.log(multiply6(6));   // 36
    console.log(multiply9(9));   // 81
    console.log(multiply16(16)); // 256
    console.log(multiply24(10)); // 240
}

/**
 * Write map using reduce
 */
function test23_15() {
    if (!Array.prototype.mapUsingReduce) {
        Array.prototype.mapUsingReduce = function (callback, thisArg) {
            return this.reduce(function (mappedArray, currentValue, index, array) {
                mappedArray[index] = callback.call(thisArg, currentValue, index, array);
                return mappedArray;
            }, []);
        }
    }

    var x = [1, 2, , 3].mapUsingReduce(
        (currentValue, index, array) => currentValue + index + array.length
    );
    console.log(x);
    // [5, 7, , 10]
}