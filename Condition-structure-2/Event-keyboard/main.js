let element = document.getElementById("nobita")
 function up() {
     element.style.top = parseInt(element.style.top) - 5 +"px";
 }
function down() {
    element.style.top = parseInt(element.style.top) + 5 +"px";
}
function left() {
    element.style.left = parseInt(element.style.left) - 5 +"px";
}
function right() {
    element.style.left = parseInt(element.style.left) + 5 +"px";
}

function move(e) {
    switch (e.keyCode) {
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
    }
}

function update() {
    window.addEventListener("keydown",move)
}