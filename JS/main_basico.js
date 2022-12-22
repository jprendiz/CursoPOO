class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    }) {
        this.content = content
        this.studentName = studentName
        this.studentRole = studentRole
        this.likes = 0
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes);
        console.log(this.content);
    }
}

function videoPlay(id) {
    const urlSecreta = "https://platzi.com/" + id
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platzi.com/" + id
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
    constructor({
        name,
        videoID
    }) {
        this.name = name
        this.videoID = videoID
    }

    reproducir() {
        videoPlay(this.videoID)
    }

    pausar() {
        videoStop(this.videoID)
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name
        this.classes = classes
        this.isFree = isFree
        this.lang = lang
    }

    get name() {
        return this._name
    }

    set name(nuevoNombre) {
        this._name = nuevoNombre
    }
}


const cursoProgBasica = new Course({
    name: "Curso gratis de programación básica",
    isFree: true
})
cursoProgBasica.name = "Nuevo Curso Gratis de Programación Básica"

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML",
})

const cursoPracticoHTML = new Course({
    name: "Curso practico HTML",
    lang: "english"
})

const cursoResponsiveDesign = new Course({
    name: "Curso Responsive Design",
})

const cursoDB = new Course({
    name: "Curso DB"
})

const cursoDV = new Course({
    name: "Curso DV"
})

const cursoTableau = new Course({
    name: "Curso Tableau"
})
// Competencia de objetos literales con prototipos
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = []
    }) {
        this.name = name,
        this.email = email,
        this.username = username,
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses,
        this.learningPath = learningPath
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })

        comment.publicar()
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("Lo sentimos, " + this.name + " solo puedes tomar cursos gratis");
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }
    
    approvedCourse(newCourse) {
        if(newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("Lo sentimos, " + this.name + ", no solo puedes tomar cursos en inglés");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {
        this.approvedCourses = newCourse
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        })

        comment.publicar()
    }
}

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega"
})

class LearnignPaths {
    constructor({
        name,
        courses = []
    }) {
        this.name = name,
        this.courses = courses 
    }

    agregarCurso(nuevoCurso) {
        this.courses.push(nuevoCurso)
    }

}

const escuelaWeb = new LearnignPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoDefinitivoHTML,
        cursoProgBasica,
        cursoResponsiveDesign
    ]
})

const escuelaData = new LearnignPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoDB,
        cursoDV,
        cursoTableau
    ]
})

const escuelaVgs = new LearnignPaths({
    name: "Escuela de Videojuegos",
    courses: [
        "Curso Intro a la Produccion de VGs",
        "Curso Unreal Engine",
        "Curso Unity 3D"
    ]
})

const juan = new BasicStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPath: [
        escuelaWeb,
        escuelaVgs
    ]
})

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "miguelito_feliz",
    learningPath: [
        escuelaWeb,
        escuelaData
    ]
})

// Notemos que disminuye la cantidad e código con clases

// Objeto literal estudiante 1
const juan1_lit = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS"
    ],

    learningPath: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design"
            ]
        },

        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso Intro a la Produccion de VGs",
                "Curso Unreal Engine",
                "Curso Unity 3D"
            ]
        },

    ]
}

// Objeto literal estudiante 2
const miguelito_lit = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia: {
        twitter: "miguelitofeliz",
        instagram: "miguelito_feliz",
        facebook: undefined
    },
    approvedCourses: [
        "Curso DataBusiness",
        "Curso DataViz"
    ],

    learningPath: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design"
            ]
        },

        {
            name: "Escuela de Data Science",
            courses: [
                "Curso DataBusiness",
                "Curso DataViz",
                "Curso Tableau"
            ]
        },

    ]
}

/*
// Objeto literal
const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTMOL y CSS",
        "Curso práctico de HTMOL y CSS",
    ],

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
}

// Objeto prototipo
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados
    // this.aprobarCurso = function (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito)
    // }
}

// Método
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito)
}

// Instancia de prototipo
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de introducción a los Videojuegos",
        "Curso de diseño Web"
    ]
)

// clases en JavaScript
class Student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
}

const miguelitoA = new Student2(
    "Miguel",
    28,
    [
        "Análisis de datos",
        "Visualización de datos"
    ])

// clases con constructor que recibe un objeto, en lugar de lista de elementos independientes
class Student3 {
    constructor({
        name,
        age,
        cursosAprobados = [],
        twtter,
        instagram,
        facebook,
        email
    }) {
        this.name = name
        this.email = email
        this.age = age
        this.cursosAprobados = cursosAprobados
    }

}

const miguelitoB = new Student3({
    name: "Miguel",
    email: "miguelito@platzi.com",
    age: 28,
})

*/
// Hacer que Natalia apruebe otro curso
// natalia.cursosAprobados.push("Curso de Responsive Designe")


// Un objeto en JavaScript es una instancia del prototipo Object que es creado de forma “nativa” por Js

//Objetos literales
/* Conformados por llave - valor 
  NO SON instancias 
  
  const students_platzirank = {
      'Juan': 110,
    'Juanita': 300,
    'Nath': 700,
    'Nora': 150,
    'Luisa': 0
}

const deportista = {
    nombre: 'Juan',
    fecha_nacimiento: '20-12-75',
    deporte: ['futbol', 'besbol', 'pin-pong']
}

//Objetos basados en prototipos

function Student() {
    this.name = "Juanita"
    this.edad = 20
    this.points = 700
}

const natalia = new Student

*/

/* const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Pràctico de HTML y CSS"
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
}

natalia.aprobarCurso("Curso de Responsive Design")
natalia.aprobarCurso("Programación Orientada a Objetos")
natalia.aprobarCurso("Matemática y Estadística con Javascript")

console.log(natalia);

function Student(name, age, cursosAprobados) {
    this.name = name,
    this.age = age,
    this.cursosAprobados = cursosAprobados
    // this.aprobarCurso = function(nuevoCursito) {
    //     this.cursosAprobados.push("nuevoCursito")
    // }
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito)
}

const juanita = new Student(
    "Juanita Alejandra", 15, ["Curso de Introducción a los video juegos", "curso de creación de personajes"]
)

// Prototipos con la sintaxis de clase
class Student2 {
    constructor({
        name, 
        age, 
        cursosAprobados = [],
        email, 
        twitter,
        instagram,
        facebook
    })
    {
        this.name = name,
        this.email = "miguelito@platzi.com",
        this.age = age,
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
}

const miguelito = new Student2(
    {
        email: "miguelito@platzi.com",
        name: "Miguel",
        age: 28,
        facebook: "joseandresprendiz@facebook.com"
    }
)

miguelito.aprobarCurso("Intro a JS")

console.log(miguelito);

const juan1 = {
    name: "Jose Andres",
    username: "jprendiz",
    points: 6000,
    socialMedia: {
        twitter: "japrendiz",
        instagram: "fjprendiz",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    learnignPaths: [
        {
            name: "Escuela de desarrollo Web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Designe"
            ]
        },
        {
            name: "Escuela de videojuegos",
            courses: [
                "Curso de Introducción a la producción de Vgs",
                "Curso de Unreal Engine",
                "Curso de Unity 3D",
            ]
        }
    ]

}

const miguelito1 = {
    name: "miguelito",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia: {
        twitter: "miguelitofeliz",
        instagram: "miguelito_feliz",
        facebook: undefined,
    },
    approvedCourses: [
        "CursoDataBusines",
        "Curso Práctico de HTML y CSS",
    ],
    learnignPaths: [
        {
            name: "Escuela de desarrollo Web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Designe"
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso de Introducción a la producción de Vgs",
                "Curso de Unreal Engine",
                "Curso de Python",
            ]
        }
    ]

}

class Estudiante {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learnignPaths = []  
    }) {
        this.name = name
        this.email = email
        this.username = username
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses
        this.learnignPaths = learnignPaths  
    }
    agregarEscuela(nuevaEscuela) {
        this.learnignPaths.push(nuevaEscuela)
    }

    agregarCurso(nuevoCurso) {
        this.approvedCourses.push(nuevoCurso)
    }
}

class FreeStudent extends Estudiante {
    constructor(props) {
        super(props) // nos permite llamar al constructor de nuestra clase madre
    }

    agregarCurso(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn('Lo sentimos, ' + this.name + ', solo puedes tomar cursos gratis');
        }

    }
}

class BasicStudent extends Estudiante {
    constructor(props) {
        super(props) // nos permite llamar al constructor de nuestra clase madre
    }

    agregarCurso(newCourse) {
        if(newCourse.lang !== "english" ) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn('Lo sentimos, ' + this.name + ', solo puedes tomar cursos gratis');
        }

    }
}

class ExpertStudent extends Estudiante {
    constructor(props) {
        super(props) // nos permite llamar al constructor de nuestra clase madre
    }

    agregarCurso(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

class RutasDeAprendizajes{
    constructor({
        nombre,
        listaCursos = []
    }
    ) {
        this.nombre = nombre
        this.listaCursos = listaCursos
    }
    agregarCurso(nuevoCurso) {
        this.listaCursos.push(nuevoCurso)
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isFree	= false,
        lang = "spanish"
    }) {
        this._name = name
        this.classes = classes
        this.isFree = isFree
        this.lang = lang
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre){
        this._name = nuevoNombre
    }

}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true
})
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    isFree: false,
})
const cursoPracticHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english"
})
const escuelaWeb = new RutasDeAprendizajes({
    nombre: "Escuela Web",
    listaCursos: [
        "Curso definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Designe"
    ]
})

const escuelaData = new RutasDeAprendizajes({
    nombre: "Escuela de Data Science",
    listaCursos: [
        "Curso de Introducción a la producción de Vgs",
        "Curso de Unreal Engine",
        "Curso de Python",
    ]
})

const escuelaVgs = new RutasDeAprendizajes({
    nombre: "Escuela de VGS",
    listaCursos: [
        "Curso de Introducción a la producción de Vgs",
        "Curso de Unreal Engine",
        "Curso de Python",
    ]
})

// const escuelaData = new RutasDeAprendizajes()
// const escuelaVJ = new RutasDeAprendizajes()

const juan2 = new FreeStudent({
    name: "Juan Jose",
    username: "juanJC",
    email: "juanito@platzi.com",
    twitter: "juanjose",
    learnignPaths: escuelaWeb
})

const miguelito2 = new BasicStudent({
    name: "Miguel Jose",
    username: "miguelito",
    email: "miguelito@platzi.com",
    twitter: "miguejose"
})

miguelito2.agregarEscuela(escuelaWeb)
miguelito2.agregarEscuela(escuelaData)

console.log({juan2, miguelito2});
*/