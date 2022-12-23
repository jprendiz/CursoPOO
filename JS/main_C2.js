class Patito {
    static sonidito = "cuak!"

    static hacerSonidito() {
        return "cuak!"
    }

}

console.log(Patito.sonidito);


const objetito = {
    name: "Juanito",
    email: "juanito@frijolitos.io",
    age: 18
}

console.log(Object.keys(objetito));

console.log(Object.getOwnPropertyNames(objetito));

console.log(Object.entries(objetito));

console.log(Object.getOwnPropertyDescriptors(objetito));

// las propiedades writable, enumerable, configurable limita los accesos a las propiedades de los objetos (métodos y atributos)

