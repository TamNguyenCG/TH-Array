let x = 0;
let array = Array();

function Add() {
    array[x] = document.getElementById('input').value;
    alert("Element: " + array[x] + " Added at index: " + x)
    x++;
    document.getElementById('input').value = "";
}

function Display(){
    let e = "<hr/>"
    for (let i = 0; i < array.length; i++) {
    e+= "Element " + i + " = " + array[i] + "<br/>"
    }
    document.getElementById('result').innerHTML=e;
}
