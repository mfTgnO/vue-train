/**
 * Default parameters
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 *
 * Syntax
 * function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {
 *  statements
 * }
 */
// test1();
// test2();
// test3();
// test4();
// test5();
// test6();
test7();

/**
 * Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
 */
function test1() {
    // test1_1();
    // test1_2();
    // test1_3();
    test1_4();
}

/**
 * Description
 * In JavaScript, function parameters default to undefined. However, it's often useful to set a
 * different default value. This is where default parameters can help.
 *
 * In the past, the general strategy for setting defaults was to test parameter values in the function
 * body and assign a value if they are undefined.
 */
function test1_1() {
    function multiply(a, b = 1) {
        return a * b;
    }

    console.log(multiply(5, 2));
    // expected output: 10
    console.log(multiply(5));
    // expected output: 5
}

/**
 * In the following example, if no value is provided for b when multiply is called, b's value would be
 * undefined when evaluating a * b and multiply would return NaN.
 */
function test1_2() {
    function multiply(a, b) {
        return a * b;
    }

    console.log(multiply(5, 2));
    // 10
    console.log(multiply(5));
    // NaN
}

/**
 * To guard against this, something like the second line would be used, where b is set to 1
 * if multiply is called with only one argument:
 */
function test1_3() {
    function multiply(a, b) {
        b = (typeof b !== 'undefined') ? b : 1;
        return a * b;
    }

    console.log(multiply(5, 2));
    console.log(multiply(5));
}

/**
 * With default parameters in ES2015, checks in the function body are no longer necessary. Now,
 * you can assign 1 as the default value for b in the function head:
 */
function test1_4() {
    function multiply(a, b = 1) {
        return a * b;
    }

    console.log(multiply(5, 2));
    // 10
    console.log(multiply(5));
    // 5
    console.log(multiply(5, undefined));
    // 5
}

/**
 * Passing undefined vs. other falsy values
 * In the second call in this example, even if the first argument is set explicitly to undefined
 * (though not null or other falsy values), the value of the num argument is still the default.
 */
function test2() {
    function test(num = 1) {
        console.log(typeof num);
    }

    test();
    // 'number' (num is set to 1)
    test(undefined);
    // 'number' (num is set to 1 too)

    // test with other falsy values:
    test('');
    // 'string' (num is set to '')
    test(null);
    // 'object' (num is set to null)
}

/**
 * Evaluated at call time
 * The default argument is evaluated at call time. So, unlike (for example) Python, a new object is
 * created each time the function is called.
 */
function test3() {
    // test3_1();
    test3_2();
}

function test3_1() {
    function append(value, array = []) {
        array.push(value);
        return array;
    }

    console.log(append(1));
    // [1]
    console.log(append(2));
    // [2], not [1, 2]
}

/**
 * This even applies to functions and variables:
 */
function test3_2() {
    function callSomething(thing = something()) {
        return thing;
    }

    let numberOfTimesCalled = 0;

    function something() {
        numberOfTimesCalled += 1;
        return numberOfTimesCalled;
    }

    console.log(callSomething());
    // 1
    console.log(callSomething());
    // 2
}

/**
 * Earlier parameters are available to later default parameters
 */
function test4() {
    // test4_1();
    test4_2();
}

/**
 * Parameters defined earlier (to the left) are available to later default parameters:
 */
function test4_1() {
    function greet(name, greeting, message = greeting + ' ' + greeting) {
        return [name, greeting, message];
    }

    console.log(greet('David', 'Hi'));
    // [ 'David', 'Hi', 'Hi Hi' ]
    console.log(greet('David', 'Hi', 'Happy Birthday!'));
    // [ 'David', 'Hi', 'Happy Birthday!' ]
}

/**
 * This functionality can be approximated like this, which demonstrates how many edge cases are handled:
 */
function test4_2() {
    function go() {
        return ':P';
    }

    function withDefaults(a, b = 5, c = b, d = go(), e = this, f = arguments, g = this.value) {
        return [a, b, c, d, e, f, g];
    }

    function withoutDefaults(a, b, c, d, e, f, g) {
        switch (arguments.length) {
            case 0:
                a;
            case 1:
                b = 5;
            case 2:
                c = b;
            case 3:
                d = go();
            case 4:
                e = this;
            case 5:
                f = arguments;
            case 6:
                g = this.value;
            default:
        }
        return [a, b, c, d, e, f, g];
    }

    let x = withDefaults.call({value: '=^_^='});
    console.log(x);
    // [ undefined, 5, 5, ':P', { value: '=^_^=' }, [Arguments] {}, '=^_^=' ]

    let x2 = withoutDefaults.call({value: '=^_^='});
    console.log(x2);
    // [ undefined, 5, 5, ':P', { value: '=^_^=' }, [Arguments] {}, '=^_^=' ]
}

/**
 * Scope Effects
 * If default parameters are defined for one or more parameter, then a second scope (Environment Record) is created,
 * specifically for the identifiers within the parameter list. This scope is a parent of the scope created for the function body.
 *
 * This means that functions and variables declared in the function body cannot be referred to from default value
 * parameter initializers; attempting to do so throws a run-time ReferenceError.
 *
 * It also means that variables declared inside the function body using var will mask parameters of the same name,
 * instead of the usual behavior of duplicate var declarations having no effect.
 */
function test5() {
    // test5_1();
    test5_2();
}

/**
 * The following function will throw a ReferenceError when invoked, because the default parameter value does not
 * have access to the child scope of the function body:
 */
function test5_1() {
    function f(a = go()) {// Throws a `ReferenceError` when `f` is invoked.
        function go() {
            return ':P';
        }
    }

    f();
}

/**
 * ...and this function will print undefined because variable var a is hoisted only to the top of the
 * scope created for the function body (and not the parent scope created for the parameter list):
 */
function test5_2() {
    function f(a, b = () => console.log(a)) {
        var a = 1;
        b();// Prints `undefined`, because default parameter values exist in their own scope
    }

    f();
}

/**
 * Parameters without defaults after default parameters
 * Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults.
 */
function test6() {
    function f(x = 1, y) {
        return [x, y];
    }

    console.log(f());
    // [ 1, undefined ]
    console.log(f(2));
    // [ 2, undefined ]
}

/**
 * Destructured parameter with default value assignment
 * You can use default value assignment with the destructuring assignment notation:
 */
function test7() {
    function f([x, y] = [1, 2], {z: z} = {z: 3}) {
        return x + y + z;
    }

    console.log(f());
    // 6
}