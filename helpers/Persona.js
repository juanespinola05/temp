// ? Prototipo: una plantilla para crear objetos

function Persona(name, lastname, age, image) {
  this.nombre = name
  this.apellido = lastname
  this.edad = age
  this.cursos = []
  this.imagen = image
}

Persona.prototype.inscribirAUnCurso = function inscribirAUnCurso(curso) {
  this.cursos.push(curso)
}

Persona.prototype.incrementarEdad = function() {
  this.edad == this.edad + 1
  return this.edad
}

export default Persona
