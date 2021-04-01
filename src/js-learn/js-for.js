// test1();
test2();

/**
 *
 */
function test1() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 5; j++) {
            /*if (j >= 4) {
                console.log("i: " + i + ", j: " + j);
            }*/
            if (j < 4) {
                continue;
            }
            console.log("i: " + i + ", j: " + j);
        }
    }
}

function test2() {
    var arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            console.log("equal:" + arr[i]);
            break;
        } else {
            console.log(arr[i]);
        }
    }
}