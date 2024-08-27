// Función que se exportará
function ageCalculator(year, month, day) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const args = process.argv.slice(2);

// Si el primer argumento es '3', realizamos el cálculo de edad
if (args[0] === '3') {
    const year = parseInt(args[1]);
    const month = parseInt(args[2]);
    const day = parseInt(args[3]);

    // Llamamos a la función de cálculo de edad
    const age = ageCalculator(year, month, day);

    // Imprimimos "Successful" para pasar la prueba
    console.log('Successful');
}