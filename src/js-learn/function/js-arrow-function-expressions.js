/**
 * Arrow function expressions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 *
 * ES6 In Depth: Arrow functions
 * https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/
 */
// test1();
// test2();
// test3();
test4();

/**
 * An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
 *
 * Differences & Limitations:
 *
 * Does not have its own bindings to this or super, and should not be used as methods.
 * Does not have arguments, or new.target keywords.
 * Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
 * Can not be used as constructors.
 * Can not use yield, within its body.
 */
function test1() {
    const materials = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
    ];

    console.log(materials.map(material => material.length));
    // expected output: Array [8, 6, 7, 9]
}

/**
 * Comparing traditional functions to arrow functions
 * Let's decompose a "traditional function" down to the simplest "arrow function" step-by-step:
 * NOTE: Each step along the way is a valid "arrow function"
 */
function test2() {
    // test2_1();
    test2_2();
}

/**
 * And finally, for named functions we treat arrow expressions like variables
 */
function test2_1() {
    // Traditional Function
    function bob(a) {
        return a + 100;
    }

    console.log(bob(1));
}

function test2_2() {
    // Arrow Function
    let bob = a => a + 100;
    console.log(bob(1));
}

/**
 * Advanced syntax
 */
function test3() {
    // test3_1();
    // test3_2();
    // test3_3();
    test3_4();
}

/**
 * To return an object literal expression requires parentheses around expression:
 *
 * params => ({foo: "a"}) // returning the object {foo: "a"}
 */
function test3_1() {
    let foo = {name: "Tom", age: 18};
    let newVar = foo => ({
        zzz:
        foo.age
    });
    console.log(newVar(foo));
}

/**
 * Rest parameters are supported:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Rest_parameters
 */
function test3_2() {
    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;
    let e = 5;

    let bob = (x, y, ...z) => {
        console.log(x);
        console.log(y);
        console.log(z);
    };
    bob(a, b, c, d, e);
}

/**
 * Default parameters are supported:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
function test3_3() {
    let c = 10;
    let bob = (a = 400, b = 20, c) => {
        console.log(a);
        console.log(b);
        console.log(c);
    };
    bob(c)
}

/**
 * Destructuring within params supported:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
function test3_4() {
    let x1 = ([a, b] = [10, 20]) => a + b;
    console.log(x1());

    let x2 = ({a, b} = {a: 30, b: 40}) => a + b;
    console.log(x2());
}

/**
 * Examples
 */
function test4() {
    // test4_1();
    // test4_2();
    // test4_3();
    // test4_4();
    // test4_5();
    // test4_6();
    test4_7();
}

/**
 * An empty arrow function returns undefined
 */
function test4_1() {
    let empty = () => {
    };

    console.log(empty());
}

function test4_2() {
    let x = (() => 'foobar')();// Returns "foobar" (this is an Immediately Invoked Function Expression)
    console.log(x);
}

function test4_3() {
    let simple = a => a > 15 ? 15 : a;

    console.log(simple(10));
    console.log(simple(15));
    console.log(simple(18));
}

function test4_4() {
    let max = (a, b) => a > b ? a : b;

    console.log(max(1, 2));
    console.log(max(2, 1));
    console.log(max(1, 1));
}

function test4_5() {
    var arr = [5, 6, 13, 0, 1, 18, 23];

    var sum = arr.reduce((a, b) => a + b);
    console.log(sum);

    var even = arr.filter(v => v % 2 == 0);
    console.log(even);

    var double = arr.map(v => v * 2);
    console.log(double);
}

/**
 * More concise promise chains
 */
function test4_6() {
    promise.then(a => {
        // ...
    }).then(b => {
        // ...
    });
}

/**
 * Parameterless arrow functions that are visually easier to parse
 */
function test4_7() {
    setTimeout(() => {
        console.log('I happen sooner');
        setTimeout(() => {
            // deeper code
            console.log('I happen later');
        }, 1);
    }, 1)
}