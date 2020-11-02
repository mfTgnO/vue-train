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
    // test3_1();
    // test3_2();
    test3_3()
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

/**
 * Defining a function that creates HTML lists
 * This example defines a function that creates a string containing HTML for a list. The only formal argument
 * for the function is a string that is "u" if the list is to be unordered (bulleted), or "o" if the list is
 * to be ordered (numbered). The function is defined as follows:
 */
function test3_2() {
    function list(type) {
        let html = '<' + type + 'l><li>';
        var args = Array.prototype.slice.call(arguments, 1);
        html += args.join('</li><li>');
        html += '</li></' + type + 'l>';// end list
        return html;
    }

    // You can pass any number of arguments to this function, and it adds each argument as a
    // list item to a list of the type indicated. For example:
    let listHTML = list('u', 'One', 'Two', 'Three');
    console.log(listHTML);
    // <ul><li>One</li><li>Two</li><li>Three</li></ul>
}

/**
 * Rest, default, and destructured parameters
 */
function test3_3() {
    // test3_3_1();
    // test3_3_2();
    // test3_3_3();
    // test3_3_4();
    // test3_3_5();
    test3_3_6();
}

/**
 * The arguments object can be used in conjunction with rest, default, and destructured parameters.
 */
function test3_3_1() {
    function foo(...args) {
        return args;
    }

    var x = foo(1, 2, 3);
    console.log(x);
    // [ 1, 2, 3 ]
}

/**
 * While the presence of rest, default, or destructured parameters does not alter the behavior of the
 * arguments object in strict mode code, there are subtle differences for non-strict code.
 *
 * In strict-mode code, the arguments object behaves the same whether or not a function is passed rest,
 * default, or destructured parameters. That is, assigning new values to variables in the body of the
 * function will not affect the arguments object. Nor will assigning new variables to the arguments
 * object affect the value of variables.
 *
 * Note: You cannot write a "use strict"; directive in the body of a function definition that accepts rest,
 * default, or destructured parameters. Doing so will throw a syntax error.
 *
 * Non-strict functions that are passed only simple parameters (that is, not rest, default, or restructured
 * parameters) will sync the value of variables new values in the body of the function with the arguments object,
 * and vice versa:
 */
function test3_3_2() {
    function func(a) {
        arguments[0] = 99;// // updating arguments[0] also updates a
        console.log(a);
    }

    func(10);
    // 99
}

/**
 * And also:
 */
function test3_3_3() {
    function func(a) {
        a = 99;// updating a also updates arguments[0]
        console.log(arguments[0]);
    }

    func(10);
    // 99
}

/**
 * Conversely, non-strict functions that are passed rest, default, or destructured parameters will not sync
 * new values assigned to argument variables in the function body with the arguments object. Instead, the
 * arguments object in non-strict functions with complex parameters will always reflect the values passed
 * to the function when the function was called (this is the same behavior as exhibited by all strict-mode
 * functions, regardless of the type of variables they are passed):
 */
function test3_3_4() {
    function func(a = 55) {
        arguments[0] = 99;// updating arguments[0] does not also update a
        console.log(a);
    }

    func(10);
    // 10
}

/**
 * And also:
 */
function test3_3_5() {
    function func(a = 55) {
        a = 99;// updating a does not also update arguments[0]
        console.log(arguments[0]);
    }

    func(10);
    // 10
}

/**
 * And also:
 */
function test3_3_6() {
    // An untracked default parameter
    function func(a = 55) {
        console.log(arguments[0]);
    }

    func();
    // undefined
}