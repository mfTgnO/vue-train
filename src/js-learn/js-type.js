// test1();
// test2();
test3();

// Delete object property
function test1() {
    var myObject = {
        "ircEvent": "PRIVMSG",
        "method": "newURI",
        "regex": "^http://.*"
    };
    console.log(myObject);
    if (myObject.ircEvent !== undefined) {
        console.log('exist');
        delete myObject.ircEvent;
        console.log(myObject);
    } else {
        console.log('non');
    }
}

function test2() {
    var url = '../../../doctor_train/ui/module/train.htm';
    var index = url.indexOf('doctor_train');
    console.log(index);

    var slice = url.slice(index);
    console.log(slice);
}

function test3() {
    var myNumber = 3;// a number
    var myString = "Hello World!";// a string
    var myBoolean = true;// a boolean

    var myArray = [];// an array
    var myObject = {};// an object

    // On top of that, there are two special types called undefined and null.
    // When a variable is used without first defining a value for it, it is equal to undefined. For example:
    var newVariable;
    console.log(newVariable); //prints undefined

    // However, the null value is a different type of value, and is used when a variable should be marked as empty. undefined can be used for this purpose, but it should not be used.

    var emptyVariable = null;
    console.log(emptyVariable);
    // will print out null
}