class Banda {
  constructor({
    nombre,
    generos = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    if (this.integrantes.find(element => element.instrumento == 'Bateria')) {
      console.warn('Lo siento, baterista contratado')
    } else {
      this.integrantes.push(integranteNuevo)
    }
  }

}
//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
  constructor({
    nombre,
    instrumento
  }) {
    this.nombre = nombre;
    this.instrumento = instrumento
  }

}

const data = {
  nombre: "Los Jacks",
  generos: ["rock", "pop", "post-punk"],
  integrantes: [],
}
const banda = new Banda(data)
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
banda.agregarIntegrante(new Integrante({ nombre: "Bob", instrumento: "Bateria" }))


console.log (banda)


/*
//Crear clase Integrante
class Integrante {
  constructor({
    nombre,
    instrumento
  }) {
    this.nombre = nombre
    this.instrumento = instrumento
  }
}

class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }

    agregarIntegrante(integranteNuevo) 
    {
        if(this.integrantes.every(i => i.instrumento !== 'Bateria')) 
        {
            this.integrantes.push(integranteNuevo)
        } else {
            console.log("No se puede");
        }
    }
}
  
  
  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)

  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Bob", instrumento: "Bateria" }))
  
  
  console.log({
    banda
  }); 
  
  */