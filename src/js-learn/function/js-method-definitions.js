/**
 * Method definitions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
 *
 * Syntax
 * const obj = {
 * get property() {},
 * set property(value) {},
 * property( parameters… ) {},
 * *generator( parameters… ) {},
 * async property( parameters… ) {},
 * async* generator( parameters… ) {},
 *
 * //  with computed keys
 * get [property]() {},
 * set [property](value) {},
 * [property]( parameters… ) {},
 * *[generator]( parameters… ) {},
 * async [property]( parameters… ) {},
 * async* [generator]( parameters… ) {},
 * };
 */
// test1();
// test2();
// test3();
test4();

/**
 * Starting with ECMAScript 2015, a shorter syntax for method definitions on objects initializers
 * is introduced. It is a shorthand for a function assigned to the method's name.
 */
function test1() {
    const obj = {
        foo() {
            return 'bar';
        }
    };

    console.log(obj.foo());
    // expected output: "bar"
}

/**
 * Description
 * The shorthand syntax is similar to the getter and setter syntax introduced in ES5.
 *
 * Given the following code:
 */
function test2() {
    const obj = {
        foo: function () {
            console.log('foo');
        },
        bar: function () {
            console.log('bar');
        }
    };

    obj.foo();
    obj.bar();
}

/**
 * You are now able to shorten this to:
 */
function test3() {
    const obj = {
        foo() {
            console.log('foo');
        },
        bar() {
            console.log('bar');
        }
    };

    obj.foo();
    obj.bar();
}

/**
 * Generator methods
 * Generator methods can be defined using the shorthand syntax as well.
 *
 * When doing so:
 *
 * The asterisk (*) in the shorthand syntax must be before the generator property name.
 * (That is, * g(){} will work, but g *(){} will not.)
 * Non-generator method definitions cannot contain the yield keyword. This means that
 * legacy generator functions won't work either, and will throw a SyntaxError. Always
 * use yield in conjunction with the asterisk (*).
 */
function test4() {
    // Using a named property
    const obj1 = {
        g: function* () {
            let index = 0;
            while (true) {
                yield index++;
            }
        }
    };

    // The same object using shorthand syntax
    const obj2 = {
        * g() {
            let index = 0;
            while (true) {
                yield index++;
            }
        }
    };

    var g = obj1.g();
    console.log(g.next().value);
    console.log(g.next().value);
    console.log(g.next().value);

    var g1 = obj2.g();
    console.log(g1.next().value);
    console.log(g1.next().value);
    console.log(g1.next().value);
}