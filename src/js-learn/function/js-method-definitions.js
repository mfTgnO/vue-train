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
// test4();
// test5();
// test6();
// test7();
test8();

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

/**
 * Async methods
 * Async methods can also be defined using the shorthand syntax.
 */
function test5() {
    test5_1();
    test5_2();
}

/**
 * Using a named property
 */
function test5_1() {
    const obj = {
        f: async function () {
            await some_promise
        }
    }
}

/**
 * The same object using shorthand syntax
 */
function test5_2() {
    const obj = {
        async f() {
            await some_promise
        }
    }
}

/**
 * Async generator methods
 * Generator methods can also be async.
 */
function test6() {
    const obj1 = {
        f: async function* () {
            yield 1;
            yield 2;
            yield 3;
        }
    };

    // The same object using shorthand syntax
    const obj2 = {
        async * f() {
            yield 1;
            yield 2;
            yield 3;
        }
    };
}

/**
 * Method definitions are not constructable
 * Methods cannot be constructors! They will throw a TypeError if you try to instantiate them.
 */
function test7() {
    test7_1();
    // test7_2();
}

function test7_1() {
    const objA = {
        method() {

        }
    };

    new objA.method();// TypeError: objA.method is not a constructor
}

function test7_2() {
    const objB = {
        * g() {

        }
    };

    new objB.g();// TypeError: objB.g is not a constructor
}

/**
 * Examples
 */
function test8() {
    // test8_1();
    test8_2();
}

/**
 * Simple test case
 */
function test8_1() {
    const obj = {
        a: 'foo',
        b() {
            return this.a;
        }
    };
    console.log(obj.b());
    // foo
}

/**
 * Computed property names
 * The shorthand syntax also supports computed property names.
 */
function test8_2() {
    const bar = {
        foo0: function () {
            return 0;
        },
        foo1() {
            return 1;
        },
        ['foo' + 2]() {
            return 2;
        }
    };

    console.log(bar.foo0());
    // 0
    console.log(bar.foo1());
    // 1
    console.log(bar.foo2());
    // 2

    // A global function
    function foo() {
        return 1;
    }

    let name = 'foo';
    console.log(window[name]());
}