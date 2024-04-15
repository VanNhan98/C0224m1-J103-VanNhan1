let display = document.getElementById("display");

function toDisplay(a) {
    display.value +=a;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value)
}