
//create Html
document.body.innerHTML = `
<div class="calculator" id="cal">
    <div class="caldisplay">
        <input class="inp" id="input">
    </div>
    <button class="clear" id="allClear">C</button>
    <button id="delete" value="">←</button>
    <button id="decimal" class="operator" value=".">.</button>
    <button id="mul" class="operator" value="*">x</button>
    <button id="num7" value="7">7</button>
    <button id="num8" value="8">8</button>
    <button id="num9" value="9">9</button>
    <button id="div" class="operator" value="/">/</button>
    <button id="num4" value="4">4</button>
    <button id="num5" value="5">5</button>
    <button id="num6" value="6">6</button>
    <button id="sub" class="operator" value="-">-</button>
    <button id="num1" value="1">1</button>
    <button id="num2" value="2">2</button>
    <button id="num3" value="3">3</button>
    <button id="add" class="operator" value="+">+</button>
    <button id="num0" value="0">0</button>
    <button id="mod" class="operator" value="%">mod</button>
    <button id="equal" value="">=</button>
</div>
`
// get display
let calculatorDisplay = document.getElementById("input")

// get the list of buttons
let inputbtn = document.querySelectorAll("button")
console.log(inputbtn)

// using foreach method, add event listeners
inputbtn.forEach((element) =>element.addEventListener("click", () => displayFunction(element.value)))

function displayFunction(valueToDisplay) {
    calculatorDisplay.value += valueToDisplay
}

//clear button
document.getElementById("allClear").onclick = function () { clear() };
function clear(){
    calculatorDisplay.value = ""
}

//back button
document.getElementById("delete").onclick = function () {back()}
function back(){
    var value = calculatorDisplay.value;
    calculatorDisplay.value = value.slice(0,-1);
}

//equal button
document.getElementById("equal").onclick = function () {equal()};
function equal(){
    let x = calculatorDisplay.value;
    let y = eval(x);
    calculatorDisplay.value = y;
}