const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
    editA() {
       this.a = "EDICIÓN EN 'a'"
    }
};

// copia objetos anidados pero no copia métodos 
const objetoComplejo = JSON.stringify(obj1)

const obj3 = JSON.parse(objetoComplejo)

let numerito = 0

while(numerito < 5) {
    console.log(numerito++)
}

function recursiva(numerito) {
    console.log(numerito)

    if (numerito < 5) {
        return recursiva(numerito + 1)
    } else {
        return;
    }
}

// function recursiva(params) {
//     if (/* Validación */) {
//         // llamados
//     } else {
//         // llamados normales, sin recursividad
//     }
// }

const numeritos = [0,1,2,3,4,5,6,7,7,8,8,9,9,7,7,4,5,5,4,0,1]
numerito = 0

for (let index = 0; index < numeritos.length; index++) {
    numerito = numeritos[index]
    console.log({index, numerito});
}

function recursiva2(numeritos) {
    if (numeritos.length != 0) {
        const firstNum = numeritos.shift()
        console.log(firstNum)
        recursiva2(numeritos)
    } 
    
}