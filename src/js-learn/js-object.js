// test1();
test2();

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