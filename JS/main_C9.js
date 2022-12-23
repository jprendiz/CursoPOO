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

const obj2 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
    d: [
        1,
        2,
        3,
        'a'
    ],
    editA() {
       this.a = "EDICIÓN EN 'a'"
    }
};

const objetoEspecial = {
    a: 'a',
    b: [1, 
        {
            a: "a",
            b: "b",
            c: "c"
        },
        "😀"
    ],
}
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