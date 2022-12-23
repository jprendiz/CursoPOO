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
function deepCopy(subject) {
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
    return copySubject
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

    // const private = {
    //     "_name": name,
    //     "_courses": courses,
    // }
    // const public = {
    //     get name(){
    //         return private["_name"]
    //     },
    //     set name(newName) {
    //         if(newName.length != 0) {
    //             private["_name"] = newName
    //         } else {
    //             console.warn("Tu nombre debe tener al menos 1 caracter");
    //         }
    //     },

    //     get courses(){
    //         return private["_courses"]
    //     },

    // }
    // return public
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
    if (isArray(learningPaths)) {
        this.learningPaths = []

        for (learningPathIndex in learningPaths) {
            // console.log(
            //     learningPaths[learningPathIndex] instanceof LearningPath,
            // );
            if(learningPaths[learningPathIndex] instanceof LearningPath) {
                this.learningPaths.push(learningPaths[learningPathIndex])
            }
        }
    } else {
        console.warn("LearningPaths no es un array")
        return
    }
    
    // this.learningPaths.push(learningPaths)
    
    // const private = {
    //     "_name": name,
    //     "_learningPaths": learningPaths
    // }
    // const public = {
    //     age,
    //     approvedCourses,
    //     email,
    //     socialMedia: {
    //         twitter,
    //         instagram,
    //         facebook,
    //     },
    //     get name(){
    //         return private["_name"]
    //     },
    //     set name(newName) {
    //         if(newName.length != 0) {
    //             private["_name"] = newName
    //         } else {
    //             console.warn("Tu nombre debe tener al menos 1 caracter");
    //         }
    //     },
    //     get learningPaths(){
    //         return private["_learningPaths"]
    //     },
    //     set learningPaths(newLP) {
    //         if(!newLP.name) {
    //             console.warn("Tu LP no tiene la propiedad nombre")
    //             return
    //         }

    //         if(!newLP.courses) {
    //             console.warn("Tu LP no tiene cursos");
    //             return;
    //         }

    //         if(!isArray(newLP.courses)) {
    //             console.warn("Tu LP no es una lista (de cursos)");
    //             return
    //         }

    //         private["_learningPaths"].push(newLP)
    //     },

    //}

    // return public
}

const escuelaWeb = new LearningPath({name: "Escuela de WebDev"})
const escuelaData = new LearningPath({name: "Escuela de Data Science"})
const juan = new Student({
    name: "Juanito",
    email: "juanito@frijolitos.com",
    learningPaths: [
        escuelaWeb,
        escuelaData,
        {
            name: "Escuela del impostor",
            courses: []
        }
    ]
})

// la validación anterior es para que no podamos agregar escuelas impostoras en arreglo 