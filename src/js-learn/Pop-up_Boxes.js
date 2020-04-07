test1();

/*
* Pop-up_Boxes
* https://www.learn-js.org/en/Pop-up_Boxes
*
* There are three types of pop-up boxes in javascript: confirm, alert, and prompt. To use any of them, type
*
* Confirm boxes will return "true" if ok is selected, and return "false" if cancel is selected.
* Alert boxes will not return anything. Prompt boxes will return whatever is in the text box.
* Note: prompt boxes also have an optional second parameter, which is the text that will already be in the text box.
* */
function test1() {
    confirm("Hi!");
    prompt("Bye!");
    alert("Hello");
}