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
test9();
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
    test9_3();
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