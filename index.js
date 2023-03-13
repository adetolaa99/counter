
/* initialize count as 0
liaten for clicks on increment button
increase count as button is being clicked
change id count in html to reflect new count
*/

let saveEl = document.getElementById("save-el");
let countInc = document.getElementById("count-inc"); // giving the function data to work with i.e pass in arguments. grab count-inc element, store in countInc var
let count = 0;

console.log(saveEl);

function increment() {
    count += 1;
    countInc.textContent = count; // set countInc innertext to count
}
function save() {
    let countStr = count + "-"
    saveEl.textContent +=  countStr;
    countInc.textContent = 0;
    count = 0;
}

