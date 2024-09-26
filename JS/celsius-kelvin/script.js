function convertirTemp(){
    const celsius = parseInt(document.getElementById("celsius").value);
    const farenheit = (celsius * 1.8) + 32;
    const kelvin = celsius + 273.15;
    const parrafoF = document.getElementById("fahrenheit-text");
    const parrafoK = document.getElementById("kelvin-text");

    parrafoF.innerText = `La temperatura en grados Fahrenheit es ${farenheit}`;
    parrafoK.innerText = `La temperatura en grados Kelvin es ${kelvin}`;

    
    console.log(farenheit);
    console.log(kelvin);
}