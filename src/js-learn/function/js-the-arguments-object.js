/**
 * The arguments object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 *
 * Properties
 * arguments.callee
 * Reference to the currently executing function that the arguments belong to. Forbidden in strict mode.
 *
 * arguments.length
 * The number of arguments that were passed to the function.
 *
 * arguments[@@iterator]
 * Returns a new Array iterator object that contains the values for each index in arguments.
 */
// test1();
// test2();
test3();

/**
 * arguments is an Array-like object accessible inside functions that contains the
 * values of the arguments passed to that function.
 */
function test1() {
    function f(a, b, c) {
        console.log(arguments[0]);
        // 1
        console.log(arguments[1]);
        // 2
        arguments[2] = 'new value';
        console.log(arguments[2]);
        // new value
    }

    f(1, 2, 3);
}

/**
 * Using typeof with arguments
 */
function test2() {
    test2_1();
    test2_2();
}

/**
 * The typeof operator returns 'object' when used with arguments
 */
function test2_1() {
    function f(a, b) {
        console.log(typeof arguments);
    }

    f(1, 2);
    // object
}

/**
 * The type of individual arguments can be determined by indexing arguments:
 */
function test2_2() {
    function f(a, b) {
        var length = arguments.length;
        for (let i = 0; i < length; i++) {
            console.log(arguments[i] + "  " + typeof arguments[i]);
            // 1  number
            // 2  string
        }
    }

    f(1, "2");
}

/**
 * Examples
 * Defining a function that concatenates several strings
 */
function test3() {
    test3_1();
}

/**
 * This example defines a function that concatenates several strings. The function's only formal
 * argument is a string containing the characters that separate the items to concatenate.
 */
function test3_1() {
    function myConcat(separator) {
        var args = Array.prototype.slice.call(arguments, 1);
        return args.join(separator);
    }

    // You can pass as many arguments as you like to this function.
    // It returns a string list using each argument in the list:
    let x1 = myConcat(', ', 'red', 'orange', 'blue');
    console.log(x1);
    // red, orange, blue

    let x2 = myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');
    console.log(x2);
    // elephant; giraffe; lion; cheetah

    let x3 = myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
    console.log(x3);
    // sage. basil. oregano. pepper. parsley
}