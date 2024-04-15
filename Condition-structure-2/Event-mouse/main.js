let imObj =  document.getElementById("myImage")
window.onload = function () {
    imObj.style.position = "relative";
    imObj.style.left = "0px";
    moveRight()
};
function moveRight() {
    imObj.style.left =parseInt(imObj.style.left) + 10 + "px";
}
