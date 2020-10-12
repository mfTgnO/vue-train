/**
 * Boolean
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 *
 * The Boolean object is an object wrapper for a boolean value.
 *
 * Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.
 *
 */
// test1();
// test2();
// test3();
test4();

/**
 * Description
 * The value passed as the first parameter is converted to a boolean value, if necessary. If the value
 * is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an
 * initial value of false. All other values, including any object, an empty array ([]), or the string "false",
 * create an object with an initial value of true.
 */
function test1() {
    // test1_1();
    // test1_2();
    // test1_3();
    test1_4();
}

/**
 * Any object of which the value is not undefined or null, including a Boolean object whose value is false,
 * evaluates to true when passed to a conditional statement. For example, the condition in the following
 * if statement evaluates to true:
 */
function test1_1() {
    var x = new Boolean(false);
    if (x) {
        console.log('true');
        // true
    } else {
        console.log('false');
    }
}

/**
 * This behavior does not apply to Boolean primitives. For example, the condition in
 * the following if statement evaluates to false:
 */
function test1_2() {
    var x = false;
    if (x) {
        console.log('true');
    } else {
        console.log('false');
        // false
    }
}

/**
 * Do not use a Boolean object to convert a non-boolean value to a boolean value.
 * To perform this task, instead, use Boolean as a function, or a double NOT operator:
 */
function test1_3() {
    var foo = 1;
    var expression = foo ? true : false;

    var x1 = new Boolean(expression);// don't use this!
    console.log(x1);
    // [Boolean: true]

    var x2 = Boolean(expression);// use this...
    console.log(x2);
    // true

    var x3 = !!(expression);// ...or this
    console.log(x3);
    // true
}

/**
 * If you specify any object, including a Boolean object whose value is false, as the initial value of a
 * Boolean object, the new Boolean object has a value of true.
 */
function test1_4() {
    var x1 = new Boolean(false);// initial value of false
    console.log(x1);

    var x2 = Boolean(x1);// initial value of true
    console.log(x2);

    var x3 = new String("Hello");// string object
    console.log(x3);

    var x4 = Boolean(x3);// initial value of true
    console.log(x4);
}

/**
 * Boolean() constructor
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
 *
 * The Boolean() constructor is used to create Boolean objects.
 *
 * Syntax
 * new Boolean([value])
 *
 * Parameters
 * value Optional
 * The initial value of the Boolean object.
 */
function test2() {
    test2_1();
    test2_2();
}

/**
 * Creating Boolean objects with an initial value of false
 */
function test2_1() {
    var x1 = new Boolean();
    console.log(x1);

    var x2 = new Boolean(0);
    console.log(x2);

    var x3 = new Boolean(null);
    console.log(x3);

    var x4 = new Boolean('');
    console.log(x4);

    var x5 = new Boolean(false);
    console.log(x5);

}

/**
 * Creating Boolean objects with an initial value of true
 */
function test2_2() {
    var x1 = new Boolean(true);
    console.log(x1);

    var x2 = new Boolean('true');
    console.log(x2);

    var x3 = new Boolean('false');
    console.log(x3);

    var x4 = new Boolean('Foo');
    console.log(x4);

    var x5 = new Boolean([]);
    console.log(x5);

    var x6 = new Boolean({});
    console.log(x6);
}

/**
 * Boolean.prototype.toString()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString
 *
 * The toString() method returns a string representing the specified Boolean object.
 *
 * Syntax
 * bool.toString()
 *
 * Return value
 * A string representing the specified Boolean object.
 *
 * Description
 * The Boolean object overrides the toString method of the Object object; it does not inherit Object.prototype.toString().
 * For Boolean objects, the toString method returns a string representation of the object.
 *
 * JavaScript calls the toString() method automatically when a Boolean is to be represented as a text value or
 * when a Boolean is referred to in a string concatenation.
 *
 * For Boolean objects and values, the built-in toString() method returns the string "true" or "false" depending
 * on the value of the boolean object.
 */
function test3() {
    var x1 = new Boolean(true);
    console.log(x1);
    console.log(x1.toString());

    var x2 = new Boolean(1);
    console.log(x2);
    console.log(x2.toString());
}

/**
 * Boolean.prototype.valueOf()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
 *
 * The valueOf() method returns the primitive value of a Boolean object.
 *
 * Syntax
 * bool.valueOf()
 *
 * Return value
 * The primitive value of the given Boolean object
 *
 * Description
 * The valueOf() method of Boolean returns the primitive value of a Boolean object or literal Boolean as a Boolean data type.
 *
 * This method is usually called internally by JavaScript and not explicitly in code.
 */
function test4() {
    var x1 = new Boolean();
    console.log(x1);
    console.log(x1.valueOf());

    var x2 = new Boolean('Mozilla');
    console.log(x2);
    console.log(x2.valueOf());
}