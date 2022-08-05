

function screenvalue(num){

    document.getElementById("screenvalue").value += num;

}

function addText(){
    let screen =  document.getElementById("screenvalue").value;
    let a = eval(screen)
    document.getElementById("screenvalue").value = a;
}







