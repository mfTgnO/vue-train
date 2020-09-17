// test2();
test3();

/**
 * Objects
 * JavaScript is a functional language, and for object oriented programming it uses
 * both objects and functions, but objects are usually used as a data structure,
 * similar to a dictionary in Python or a map in Java. In this tutorial, we will
 * learn how to use objects as a data structure. The advanced tutorials explain
 * more about object oriented JavaScript.
 * To initialize an object, use curly braces:
 * */
function test1() {
    var emptyObject = {};
    var personObject = {
        firstName: "John",
        lastName: "Smith"
    }
}

/**
 * Member addressing
 * Members of objects can be addressed using the brackets operator [], very much like arrays,
 * but just like many other object oriented languages, the period . operator can also be used.
 * They are very similar, except for the fact that brackets return a member by using a string,
 * in contrast to the period operator, which requires the member to be a simple word (the word
 * should not contain spaces, start with a number or use illegal characters).
 *
 * For example, we can continue to fill the person object with more details:
 * */
function test2() {
    var personObject = {
        firstName: "John",
        lastName: "Smith"
    };
    personObject.age = 23;
    personObject["salary"] = 14000;

    // Iteration
    // Iterating over members of a dictionary is not a trivial task, since iterating over objects
    // can also yield members who don't actually belong to an object. Therefore, we must use the
    // hasOwnProperty method to check that the member in fact belongs to the object.
    for (var member in personObject) {
        if (personObject.hasOwnProperty(member)) {
            console.log("the member " + member + " of personObject is " + personObject[member]);
        }
    }
}

/**
 * How to loop through object in JavaScript
 * https://reactgo.com/javascript-loop-through-object/
 */
function test3() {
    const obj = {
        id: 1,
        name: "gowtham",
        active: true
    };

    method1(obj);
    // method2(obj);

    /**
     * For in loop
     * for in loop helps us to get the object key on each iteration by using that we can access the object value.
     */
    function method1(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // console.log(`${key} : ${obj[key]}`);
                // console.log(`${key}`);
                console.log(`${key}`);
            }
        }
    }

    /**
     * Object.entries
     * The Object.entries() method returns the array with arrays which are [key,value] pairs of the given object.
     */
    function method2(obj) {
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key}:${value}`)
        });
    }
}