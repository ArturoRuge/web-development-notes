let contador = 0;

function contadorClick(){
    contador += 1;
    console.log(`Cantidad de clicks: ${contador}`);
}
// ------------------------------
let mensajes = [
    "¡Sé feliz hoy! Aunque únicamente sea por joder a los envidiosos.", 
    "Todo es divertido, siempre y cuando le ocurra a otra persona.",
    "Siembra un árbol y harás feliz a un perro.",
    "Ahí afuera hay un mundo mejor, pero es carísimo."]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function mensaje(){
    let cajaMensaje = document.getElementById("cajaMensaje");
    cajaMensaje.innerText = mensajes[getRandomInt(3)];

}

// ------------------------------

function onKeyDown(event){
    var codigo = event.which || event.keyCode;

    if(codigo>47 && codigo<58){
        console.log("El número que presionaste es: ", String.fromCharCode(codigo));
    }

}