

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

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined
    }
}

const juan = deepCopy(studentBase)
Object.seal(juan)

juan.name = "Josefino"


// Object.defineProperty(juan, "name", {
//     value: "Juanito",
//     configurable: false
// })




