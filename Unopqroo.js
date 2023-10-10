const rl = require("readline-sync");
//juego UNO
var deck = [];
var colors = ["Yellow","Blue", "Green", "Red" ];
var types = ["comun", "Special", "Comodin"];
var card = {
    color: null, // color puede ser amarillo, azul, verde, y rojo.
    number: null, // el numero de 0-9
    type: null, //comun,especiales,comodines

};

for (var cColor = 0; cColor < colors.length; cColor++ ) {

    for (var cNumber = 0; cNumber < 10; cNumber ++){
        deck.push({color: colors[cColor], number: cNumber, type: "Comun"})
        } 
}
for (var cColor = 1; cColor < colors.length; cColor++ ) {
    console.log("color:", colors[cColor]);
    for (var cNumber1 = 1; cNumber1 < 10; cNumber1 ++){
        deck.push({color: colors[cColor], Number1: cNumber1, type: "Comun"})
    }  

    deck.push({color: colors[cColor], number:"+2" , type: "Especial"})
    deck.push({color: colors[cColor], number:"+2" , type: "Especial"})
    deck.push({color: colors[cColor], number:"revers", type: "Especial"})
    deck.push({color: colors[cColor], number:"revers", type: "Especial"})
    deck.push({color: colors[cColor], number:"B" , type: "Especial"})
    deck.push({color: colors[cColor], number:"B" , type: "Especial"})
}
deck.push({color: null, number:"+4" , type: "Comodin"})
deck.push({color: null, number:"+4" , type: "Comodin"})
deck.push({color: null, number:"+4", type: "Comodin"})
deck.push({color: null, number:"+4", type: "Comodin"})
deck.push({color: null, number:"CC" , type: "Comodin"})
deck.push({color: null, number:"CC" , type: "Comodin"})
deck.push({color: null, number:"CC" , type: "Comodin"})
deck.push({color: null, number:"CC" , type: "Comodin"})


//tarea traer diagrama de flujo y pseucodigo

const players = rl.question("¿Cuantos jugadores seran?",  {})

console.log(players);
//npm init sirve para instalar una
// npm i o npm install <modulo>