const textBox= document.getElementById("textBox");
const ToFarenheit = document.getElementById("toFarenheit");
const toCelsuis  = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
function convert(){
    if(ToFarenheit.checked){
       temp=Number(textBox.value);
       temp = (temp*9/5)+32;
       result.textContent = temp + "°F";
    }
    else if(toCelsuis.checked){
        temp = Number(textBox.value);
        temp = 5/9*(temp-32);
        result.textContent = temp + "°C";
    }
    else{
        result.textContent = "select a  unit -_-";
    }
}