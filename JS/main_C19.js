   // El duck typing es la forma en que identificamos a nuestros elementos dependiendo de los métodos y atributos que tengan por dentro
//validar si algo es un objeto
function isObject(subject) {
    return typeof subject === "object"
}

// validar si algo es un array
function isArray(subject) {
    return Array.isArray(subject)
}

// copiar un objeto en otro de forma recursiva
// class SuperObject {
//     static isObject(subject) {
//         return typeof subject == "object"
//     }

//     
//         return copySubject
//     }
// }


function SuperObject() {}
SuperObject.isObject = function (subject) {
    return typeof subject == "object"
}

SuperObject.deepCopy = function (subject) {
    let copySubject

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)

    if (subjectIsArray) {
        copySubject = []
    } else if (subjectIsObject) {
        copySubject = {}
    } else {
        return subject
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key])

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key])
        } else if (subjectIsArray) {
            copySubject.push(subject[key])
        } else {
            copySubject[key] = subject[key]
        }
    }
}

function requiredParam(param) {
    throw new Error(param + " es obligatorio")
}
function LearningPath({
    name = requiredParam("name"),
    courses = []
}) {
    this.name = name;
    this.courses = courses;

}
// fábrica de objetos
function Student(
{
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    instagram,
    facebook,
    twitter,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    this.name = name
    this.email = email
    this.age = age
    this.approvedCourses = approvedCourses
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    }

    const private = {
        "_learningPaths": []
    }

    Object.defineProperty(this, "learningPaths", {
        get(){
            return private["_learningPaths"]
        },
        set(newLP) {
            if(newLP instanceof LearningPath) {
                private["_learningPaths"].push(newLP)
            } else {
                console.warn("Alguno de los LPs no es una instancia del prototipo LearningPath")
            } 
        },
    })

    for(learningPathIndex in learningPaths) {
        this.learningPaths = learningPaths[learningPathIndex]
    }
}


const escuelaWeb = new LearningPath({name: "Escuela de WebDev"})
const escuelaData = new LearningPath({name: "Escuela de Data Science"})
const juan = new Student({
    name: "Juanito",
    email: "juanito@frijolitos.com",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
})

// la validación anterior es para que no podamos agregar escuelas impostoras en arreglo            
                
