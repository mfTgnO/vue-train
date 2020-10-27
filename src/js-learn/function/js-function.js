/**
 * Functions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 *
 */
// test1();
// test2();
// test4();
// test5();
test6();

/**
 *
 */
function test1() {
    /* Declare the function 'myFunc' */
    function myFunc(theObject) {
        theObject.brand = "Toyota";
    }

    /*
     * Declare variable 'mycar';
     * create and initialize a new Object;
     * assign reference to it to 'mycar'
     */
    var mycar = {
        brand: "Honda",
        model: "Accord",
        year: 1998
    };

    /* Logs 'Honda' */
    console.log(mycar.brand);

    /* Pass object reference to the function */
    myFunc(mycar);

    /*
     * Logs 'Toyota' as the value of the 'brand' property
     * of the object, as changed to by the function.
     */
    console.log(mycar.brand);
}

/**
 * A function defined by a function expression or by a function declaration inherits the current scope.
 * That is, the function forms a closure. On the other hand, a function defined by a Function constructor
 * does not inherit any scope other than the global scope (which all functions inherit).
 */
function test2() {
    /*
     * Declare and initialize a variable 'p' (global)
     * and a function 'myFunc' (to change the scope) inside which
     * declare a varible with same name 'p' (current) and
     * define three functions using three different ways:-
     *     1. function declaration
     *     2. function expression
     *     3. function constructor
     * each of which will log 'p'
     */
    var p = 5;

    function myFunc() {
        var p = 9;

        function decl() {
            console.log(p);
        }

        var expr = function () {
            console.log(p);
        };
        var cons = new Function('\tconsole.log(p);');

        decl();
        expr();
        cons();
    }

    myFunc();

    /*
     * Logs:-
     * 9  - for 'decl' by function declaration (current scope)
     * 9  - for 'expr' by function expression (current scope)
     * 5  - for 'cons' by Function constructor (global scope)
     */
}

/**
 * A function declaration is very easily (and often unintentionally) turned into a function expression.
 * A function declaration ceases to be one when it either:
 *
 * becomes part of an expression
 * is no longer a "source element" of a function or the script itself. A "source element" is a non-nested statement
 * in the script or a function body:
 */
function test3() {
    // function declaration
    function foo() {
    }

    // function expression
    (function bar() {
    });

    // function expression
    x = function hello() {
    };


    if (x) {
        // function expression
        function world() {
        }
    }


    // function declaration
    function a() {
        // function declaration
        function b() {
        }

        if (0) {
            // function expression
            function c() {
            }
        }
    }
}

/**
 * Block-level functions
 * In strict mode, starting with ES2015, functions inside blocks are now scoped to that block.
 * Prior to ES2015, block-level functions were forbidden in strict mode.
 */
function test4() {
    'use strict';

    function f() {
        return 1;
    }

    {
        function f() {
            return 2;
        }
    }

    console.log(f() === 1); // true

    // f() === 2 in non-strict mode
}

/**
 * Returning a formatted number
 * The following function returns a string containing the formatted representation
 * of a number padded with leading zeros.
 */
function test5() {
    // This function returns a string padded with leading zeros
    function padZero(num, totalLen) {
        var numStr = num.toString();// Initialize return value as string
        var numZeros = totalLen - numStr.length;// Calculate no. of zeros
        for (let i = 1; i <= numZeros; i++) {
            numStr = "0" + numStr;
        }
        return numStr;
    }

    console.log(padZero(42, 4));
    console.log(padZero(42, 2));
    console.log(padZero(5, 4));
}

/**
 * Determining whether a function exists
 * You can determine whether a function exists by using the typeof operator. In the following example,
 * a test is performed to determine if the window object has a property called noFunc that is a function.
 * If so, it is used; otherwise, some other action is taken.
 *
 * Note that in the if test, a reference to noFunc is used—there are no brackets "()" after the function
 * name so the actual function is not called.
 */
function test6() {
    if ('function' === typeof window.noFunc) {
        // use noFunc()
    } else {
        // do something else
    }
}