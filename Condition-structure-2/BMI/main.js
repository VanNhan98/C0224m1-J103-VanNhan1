    function check() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
    alert("Please enter both weight and height.");
    return;
}

    let result  ;
    let bmi = weight / Math.pow(height,2);
    result = (bmi < 18.5)?"Underweight":
    (bmi <25.0 )?"Normal":
    (bmi <30.0 )?"Overweight":"Obese";
    document.getElementById("check").innerHTML = "Chỉ số BMI là: " + bmi +" " +result;
}
