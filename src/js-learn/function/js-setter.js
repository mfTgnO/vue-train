/**
 * setter
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
 *
 * Syntax
 * {set prop(val) { . . . }}
 * {set [expression](val) { . . . }}
 *
 * Parameters
 * prop
 * The name of the property to bind to the given function.
 *
 * val
 * An alias for the variable that holds the value attempted to be assigned to prop.
 *
 * expression
 * Starting with ECMAScript 2015, you can also use expressions for a computed property name to bind to the given function.
 */
// test1();
// test2();
// test3();
test4();

/**
 * The set syntax binds an object property to a function to be called when
 * there is an attempt to set that property.
 */
function test1() {
    const language = {
        set current(name) {
            this.log.push(name);
        },
        log: []
    };

    language.current = 'EN';
    language.current = 'FA';

    console.log(language.log);
    // expected output: Array ["EN", "FA"]
}

/**
 * Removing a setter with the delete operator
 * If you want to remove the setter, you can just delete it:
 */
function test2() {
    const language = {
        set current(name) {
            this.log.push(name);
        },
        log: []
    };

    console.log(language);
    // { current: [Setter], log: [] }

    delete language.current;

    console.log(language);
    // { log: [] }
}

/**
 * Defining a setter on existing objects using defineProperty
 * To append a setter to an existing object, use Object.defineProperty().
 */
function test3() {
    const obj = {a: 0};
    Object.defineProperty(obj, 'b', {
        set: function (x) {
            this.a = x / 2;
        }
    });

    obj.b = 10;
    //  Runs the setter, which assigns 10 / 2 (5) to the 'a' property

    console.log(obj.a);
    //  5
}

/**
 * Using a computed property name
 */
function test4() {
    const expr = 'foo';

    const obj = {
        baz: 'bar',
        set [expr](v) {
            this.baz = v;
        }
    };

    console.log(obj.baz);
    // bar

    obj.foo = 'baz';
    // run the setter

    console.log(obj.baz);
    // baz
}