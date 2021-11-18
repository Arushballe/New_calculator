var first_number = document.getElementById("first_number").value;
var second_number = document .getElementById("second_number").value;

function add()
{
    var a,b,c;
    a = Number(document.getElementById("first_number").value);
    b = Number(document.getElementById("second_number").value);
    c = a+b;
    document.getElementById("result").innerHTML = c;

}

function subtract()
{
    var a,b,c;
    a = Number(document.getElementById("first_number").value);
    b = Number(document.getElementById("second_number").value);
    c = a-b;
    document.getElementById("result").innerHTML = c;

}

function multiply()
{
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divide()
{
    num1 = document.getElementById("first_number").value;
    num2 = document.getElementById("second_number").value;
    document.getElementById("result").innerHTML = num1 / num2;
}