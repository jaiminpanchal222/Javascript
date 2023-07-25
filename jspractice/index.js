function add() {
    let number1, number2, sum
    number1 = parseInt(document.getElementById("first").value);
    number2 = parseInt(document.getElementById("second").value);
    sum = number1 + number2
    document.getElementById("answer").value = sum;
}