const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],

    addCourse(newCourse) {
        console.log(this)
        console.log(this.approvedCourses)
        this.approvedCourses.push(newCourse)
    }
}

// console.log(Object.keys(juan))
//console.log(Object.getOwnPropertyNames(juan))
//console.log(Object.entries(juan))

Object.defineProperty(juan, "pruebaNASA", {
    value: "extraterrestres",
    // writable: true,
    // enumerable: true,
    // configurable: true
    // todo false al estar comentariado
})

Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable: true,
    enumerable: false,  // no aparece cuando lo listamos con Object.keys, pero sí en Object.getOwnPropertyNames
    configurable: true
})

Object.defineProperty(juan, "editor", {
    value: "VSC",
    writable: false,
    enumerable: true,
    configurable: true
})

Object.defineProperty(juan, "terminal", {
    value: "WSL",
    writable: true,
    enumerable: true,
    configurable: false
})

//Object.seal(juan)  // configurable = false

Object.freeze(juan)  // writable = false  y configurable = false

console.log(Object.getOwnPropertyDescriptors(juan));
