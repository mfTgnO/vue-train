test1();

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