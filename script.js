


function insert(num){

const valordisplay = document.querySelector(".display").innerHTML;
   
document.querySelector(".display").innerHTML = valordisplay + num;

}

function clean(){

    document.querySelector(".display").innerHTML = "";
}

function calcular(){
    
    const valordisplay = document.querySelector(".display").innerHTML;
    
    document.querySelector(".display").innerHTML = eval(valordisplay)
}

function invertsignal(){
    const valordisplay = document.querySelector(".display").innerHTML;
    document.querySelector(".display").innerHTML = valordisplay * -1;
}
