function modoescuro(valor) { 
    if (valor == "escuro"){ 
        document.getElementById("black").href="escuro.css";
        document.querySelector(".modoEscuro").value="claro";
        document.querySelector(".modoEscuro").innerHTML="Claro";
    } else {
        document.getElementById("black").href="style.css";
        document.querySelector(".modoEscuro").value="escuro";
        document.querySelector(".modoEscuro").innerHTML="escuro";
    }
    return console.log("Funcao escuro!!")
}

var tamanho = 100;
var salto = 4;

function bigFont() {
    if(tamanho <= 150){
        console.log("Antes do incremento" + tamanho);
        tamanho+=salto; 
        document.getElementById("maxFont").style.fontSize=tamanho+"%";
        console.log("Depois do incremento"+tamanho);
    }
}
function peqFont() {
    if(tamanho>=100){
        console.log("Antes do decremento" + tamanho);
        tamanho-=salto;
        document.getElementById("maxFont").style.fontSize=tamanho+"%";
        console.log("Depois do decremento"+tamanho);
    }
}