const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    }
};

const obj2 = {}


// copiar un objeto en otro  
for (prop in obj1) {
    obj2[prop]  = obj1[prop];
}

// la versión anterior no funciona con propiedades que sean objetos, es decir, con objetos anidados

//propiedad assign: funciona igual que el anterior
const obj3 = Object.assign({}, obj1)

// propiedad create: funciona similar al anterior en objetos anidados, es más, el origal afecta a la copia en las propiedades primarias
const obj4 = Object.create(obj1)

