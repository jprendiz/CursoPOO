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

// const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses: undefined,
//     learningPaths: undefined,
//     socialMedia: {
//         twitter: undefined,
//         instagram: undefined,
//         facebook: undefined
//     }
// }

function requiredParam(param) {
    throw new Error(param + " es obligatorio")
}
// fábrica de objetos
function createStudent(
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
    const private = {
        "_name": name,
    }
    const public = {
        age,
        approvedCourses,
        learningPaths,
        email,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        get name(){
            return private["_name"]
        },
        set name(newName) {
            if(newName.length != 0) {
                private["_name"] = newName
            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
        }
            // changeName(newName) {
            //     private["_name"] = newName
            // },
            // readName(){
            //     return private["_name"]
            // },
    }

    // Object.defineProperty(public, "readName", {
    //     configurable: false,
    //     writable: false
    // })

    // Object.defineProperty(public, "changeName", {
    //     configurable: false,
    //     writable: false
    // })

    return public
}

const juan = createStudent({
    name: "Juanito",
    age: 18,
    email: "juanito@frijolitos.com",
    twitter: "fjuandc",
})

const juanita = createStudent({ name: "juanito chiquitito", email: "juanito@chiquito.com"})

// const pepe = createStudent()