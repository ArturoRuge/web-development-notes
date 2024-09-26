function cambiarTexto(){
    let texto = document.getElementById("hola");

    if(texto.style.color == "blue"){
    texto.style.color = "red";
} else{
    texto.style.color = "blue";
}
}

function alerta(){
    // alert("Las manzanas son cafes");
    console.log("Mensaje por consola")
}
document.getElementById('cafe').style.color = "brown";
document.getElementById('cafe').style.textDecoration = "underline";
