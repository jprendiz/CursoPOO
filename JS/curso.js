class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      console.log(this._name);
    }
  
    set name(nuevoNombrecito) {
        if (typeof nuevoNombrecito === 'string') {
            this._name = nuevoNombrecito.substring(0,1).toUpperCase() + nuevoNombrecito.substring(1,nuevoNombrecito.lenght)
        } 
        // this._name = nuevoNombrecito + "_TXT"
    }
  }

    const courseName = "curso de programación básica"
    const nombreMayusculas = new Course({
        name: courseName,
    })
    
    nombreMayusculas.name = "curso gratis de programación"
    console.log(nombreMayusculas.name)
