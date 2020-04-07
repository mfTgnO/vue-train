// test1();
// test2();
// test3();
// test4();
test5();

/**
* The if statement
* https://www.learn-js.org/en/Conditions
*
* To evaluate whether two variables are equal, the == operator is used.
* There is also another equality operator in JavaScript, ===, which does a strict comparison.
* This means that it will be true only if the two things you are comparing are the same type as well as same content.
* */
function test1() {
    console.log("1" == 1);// true
    console.log("1" === 1);// false
}

/**
* Inequality operators can also be used to evaluate expressions. For example:
* */
function test2() {
    var foo = 1;
    var bar = 2;
    if (foo < bar) {
        console.log("foo is smaller than bar.");
    }
}

/**
* Two or more expressions can be evaluated together using logical operators to check if two expressions evaluate
* to true together, or at least one of them. To check if two expressions both evaluate to true, use the
* AND operator &&. To check if at least one of the expressions evaluate to true, use the OR operator ||.
* */
function test3() {
    var foo = 1;
    var bar = 2;
    var moo = 3;

    if (foo < bar && moo > bar) {
        console.log("foo is smaller than bar AND moo is larger than bar.");
    }

    if (foo < bar || moo > bar) {
        console.log("foo is smaller than bar OR moo is larger than bar.");
    }
}

/**
* The NOT operator ! can also be used likewise:
* */
function test4() {
    var notTrue = false;
    if (!notTrue) {
        console.log("not not true is true!");
    }
}

/**
* The switch statement
*
* The switch statement is similar to the switch statement from the C programming language,
* but also supports strings. The switch statement is used to select between more than two
* different options, and to run the same code for more than one option. For example:
*
* In this example, "Private" an "Sergeant" both trigger the first sentence, "Commander" triggers the second sentence and "Captain"
* triggers the third. If an unknown rank was evaulated, the default keyword defines the action for this case (optional).
* We must use the break statement between every code block to avoid the switch from executing the next code block.
*
* Using the switch statement in general is not recommended, because forgetting the break keyword causes very confusing results.
* */
function test5() {
    var rank = "Commander";
    switch (rank) {
        case "Private":
        case "Sergeant":
            console.log("You are not authorized.");
            break;
        case "Commander":
            console.log("Hello commander! what can I do for you today?");
            break;
        case "Captain":
            console.log("Hello captain! I will do anything you wish.");
            break;
        default:
            console.log("I don't know what your rank is.");
            break;
    }
}