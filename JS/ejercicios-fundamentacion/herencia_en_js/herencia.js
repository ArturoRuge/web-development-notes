// function Pelicula(nombre, vista, veces){
//     this.nombre = String(nombre);
//     this.vista = Boolean(vista);
//     this.veces = Number(veces);

//     this.info = function(){
//         if(vista === true){
//             console.log("He visto " + this.nombre + " " + this.veces + " veces.")
//         } else{
//             console.log("Todavía no he visto " + this.nombre + ".")
//         }
//     }
// }
// elemento prototipo PRUEBA
const PrototipoPelicula{
    visualizar: function(){
        console.log("He visto " + this.nombre + " " + this.veces + " veces.")
    }
}



//////////////
// const watchList = [];

// const starWars = new Pelicula("Star Wars", true, 4);
// watchList.push(starWars);

// console.log(watchList);
// starWars.info()

/////
// const avatar = Object.create(Pelicula);
// avatar.nombre = "Avatar";
// avatar.vista = true;
// watchList.push(avatar);

// console.log(watchList);