/**
 * getter
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
 *
 * Syntax
 * {get prop() { ... } }
 * {get [expression]() { ... } }
 *
 * Parameters
 * prop
 * The name of the property to bind to the given function.
 *
 * expression
 * Starting with ECMAScript 2015, you can also use expressions for a computed property name to bind to the given function.
 */
// test1();
// test2();
// test3();
test4();

/**
 * The get syntax binds an object property to a function that will be called when that property is looked up.
 */
function test1() {
    const obj = {
        log: ['a', 'b', 'c'],
        get latest() {
            if (this.log.length === 0) {
                return undefined;
            }

            return this.log[this.log.length - 1];
        }
    };

    console.log(obj.latest);
    // expected output: "c"
}

/**
 * Deleting a getter using the delete operator
 * If you want to remove the getter, you can just delete it:
 */
function test2() {
    const obj = {
        log: ['a', 'b', 'c'],
        get latest() {
            if (this.log.length === 0) {
                return undefined;
            }

            return this.log[this.log.length - 1];
        }
    };

    console.log(obj);
    // { log: [ 'a', 'b', 'c' ], latest: [Getter] }

    delete obj.latest;

    console.log(obj);
    // { log: [ 'a', 'b', 'c' ] }
}

/**
 * Defining a getter on existing objects using defineProperty
 * To append a getter to an existing object later at any time, use Object.defineProperty().
 */
function test3() {
    const obj = {a: 0};

    Object.defineProperty(obj, 'b', {
        get: function () {
            return this.a + 1;
        }
    });

    console.log(obj.b);
    // Runs the getter, which yields a + 1 (which is 1)
}

/**
 * Using a computed property name
 */
function test4() {
    const expr = 'foo';
    const obj = {
        get [expr]() {
            return 'bar';
        }
    };

    console.log(obj.foo);
    // "bar"
}
