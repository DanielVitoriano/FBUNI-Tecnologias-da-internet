//QUESTÃO 1
function calculate(){
    var value1 = parseInt(document.getElementById("value1").value);
    var value2 = parseInt(document.getElementById("value2").value);
    var operator = document.getElementById("operator").value;
    var result;

    if(operator == 'op1'){ result = value1 + value2;}
    else if(operator == 'op2') {result = value1 - value2;}
    else if(operator == 'op3') {result = value1  * value2;}
    else {result = value1 / value2;}
    alert(result);
    console.log("Resultado" + result);
    debugger
   // return result;
}

// QUESTÂO 3
var values = [];
var index_values = 0;
var historic = [];
var count = 0;

function insert(value){
    document.getElementById("values").value = document.getElementById("values").value + value;

}

function result(){
    var x = document.getElementById("values").value;

    if(x){
        document.getElementById("result").value = eval(x);
        historic[count] = document.getElementById("values").value + "=" + document.getElementById("result").value;
        count ++;
    }
}
function clean(){
    document.getElementById("values").value = ' ';
    document.getElementById("result").value = ' ';
}

function Historic(){
    for(var c = 0; c <= count; c++){
        console.log(historic[c]);
    }
    alert(historic);
}