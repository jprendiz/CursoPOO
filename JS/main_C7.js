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

