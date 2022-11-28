function inscribirAunCurso(curso) {
  this.cursos.push(curso)
}
// ? Factory pattern
// ? DRY: dont repeat yourself 
function crearPersona (name, lastname, age) {
  const persona = {
    nombre: name,
    apellido: lastname,
    edad: age,
    cursos: [],
    // ? método de un objeto
    inscribirAUnCurso: inscribirAunCurso
  }
  return persona
}

// ! POO: programación orientada a objetos
// ? Paradigma de prog
// ? Abstracción ✅, herencia, encapsulamiento y polimorfismo
