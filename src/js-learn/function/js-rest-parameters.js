/**
 * Rest parameters
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 *
 * The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
 */
// test1();
// test2();
// test3();
// test4();
// test5();
// test6();
test7();

/**
 * Syntax
 * function f(a, b, ...theArgs) {
 * // ...
 * }
 */
function test1() {
    function sum(...theArgs) {
        return theArgs.reduce((previous, current) => {
            return previous + current;
        });
    }

    console.log(sum(1, 2, 3));
    // expected output: 6
    console.log(sum(1, 2, 3, 4));
    // expected output: 10
}

/**
 * Only the last parameter can be a "rest parameter".
 */
function test2() {
    function myFun(a, b, ...manyMoreArgs) {
        console.log('a:', a);
        console.log('b:', b);
        console.log('manyMoreArgs:', manyMoreArgs);
    }

    myFun("one", "two", "three", "four", "five", "six");
}

/**
 * Description
 * A function's last parameter can be prefixed with ... which will cause all remaining (user supplied)
 * arguments to be placed within a "standard" JavaScript array.
 *
 * Difference between rest parameters and the arguments object
 * There are three main differences between rest parameters and the arguments object:
 *
 * rest parameters are only the ones that haven't been given a separate name (i.e. formally defined in function expression),
 * while the arguments object contains all arguments passed to the function;
 * the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map,
 * forEach or pop can be applied on it directly;
 * the arguments object has additional functionality specific to itself (like the callee property).
 */
function test3() {
    // test3_1();
    test3_2();
}

/**
 * Before rest parameters, "arguments" could be converted to a normal array using:
 */
function test3_1() {
    function f(a, b,) {
        var normalArray1 = Array.prototype.slice.call(arguments);
        // -- or --
        var normalArray2 = [].slice.call(arguments);
        // -- or --
        var normalArray3 = Array.from(arguments);

        var first = normalArray1.shift();// OK, gives the first argument
        console.log(first);
        let first2 = arguments.shift();    // ERROR (arguments is not a normal array)
        console.log(first2);
    }

    f(1, 2);
}

/**
 * Now, you can easily gain access to a normal array using a rest parameter
 */
function test3_2() {
    function f(...args) {
        let normalArray = args;
        var first = normalArray.shift();// OK, gives the first argument

        console.log(first);
    }

    f(1, 2);
}

/**
 * Examples
 * Using rest parameters
 */
function test4() {
    // test4_1();
    // test4_2();
    test4_3();
}

/**
 * In this example, the first argument is mapped to a and the second to b, so these named arguments are used as normal.
 *
 * However, the third argument, manyMoreArgs, will be an array that contains the 3rd, 4th, 5th, 6th ... nth — as many arguments that the user includes.
 */
function test4_1() {
    function myFun(a, b, ...manyMoreArgs) {
        console.log("a:", a);
        console.log("b:", b);
        console.log("manyMoreArgs:", manyMoreArgs);
    }

    myFun("one", "two", "three", "four", "five", "six");
    // a: one
    // b: two
    // manyMoreArgs: [ 'three', 'four', 'five', 'six' ]
}

/**
 * Below... even though there is just one value, the last argument still gets put into an array.
 */
function test4_2() {
    function myFun(a, b, ...manyMoreArgs) {
        console.log("a:", a);
        console.log("b:", b);
        console.log("manyMoreArgs:", manyMoreArgs);
    }

    myFun("one", "two", "three");
    // a: one
    // b: two
    // manyMoreArgs: [ 'three' ]
}

/**
 * Below, the third argument isn't provided, but manyMoreArgs is still an array (albeit an empty one).
 */
function test4_3() {
    function myFun(a, b, ...manyMoreArgs) {
        console.log("a:", a);
        console.log("b:", b);
        console.log("manyMoreArgs:", manyMoreArgs);
    }

    myFun("one", "two");
}

/**
 * Argument length
 * Since theArgs is an array, a count of its elements is given by the length property:
 */
function test5() {
    function f(...args) {
        console.log(args.length);
    }

    f();
    f(5);
    f(5, 6, 7);
    // 0
    // 1
    // 3
}

/**
 * Ordinary parameter and rest parameters
 * In the next example, a rest parameter is used to collect all parameters after the first into an array.
 * Each one of them is then multiplied by the first parameter, and the array is returned:
 */
function test6() {
    function multiply(multiplier, ...theArgs) {
        return theArgs.map(element => {
            return multiplier * element;
        });
    }

    var arr = multiply(2, 1, 2, 3);
    console.log(arr);
    // [ 2, 4, 6 ]
}

/**
 * Use with the arguments object
 * Array methods can be used on rest parameters, but not on the arguments object:
 */
function test7() {
    // test7_1();
    // test7_2();
    test7_3();
}

function test7_1() {
    function sortRestArgs(...theArgs) {
        return theArgs.sort();
    }

    console.log(sortRestArgs(5, 3, 7, 1));
    // [ 1, 3, 5, 7 ]
}

function test7_2() {
    function sortArguments() {
        return arguments.sort();
    }

    console.log(sortArguments(5, 3, 7, 1));
    // TypeError: arguments.sort is not a function
}

/**
 * To use Array methods on the arguments object, it must be converted to a real array first.
 */
function test7_3() {
    function sortArguments() {
        var args = Array.from(arguments);
        return args.sort();
    }

    console.log(sortArguments(5, 3, 7, 1));
    // [ 1, 3, 5, 7 ]
}