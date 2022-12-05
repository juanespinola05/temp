import Persona from './helpers/Persona.js'
import appendPersona from './helpers/appendPersona.js'

const app = document.querySelector('#app')
const form = document.querySelector('#form')

form.onsubmit = handleSubmit
// ? handle....
function handleSubmit(event) {
  event.preventDefault()
  const persona = new Persona(form.nombre.value, form.apellido.value, form.edad.value, 'https://picsum.photos/id/23/200/300')
  console.log(persona)
  appendPersona(persona, app)
}


// const juan = new Persona("Juan", "Espinola", 20, 'https://picsum.photos/id/237/200/300')
// const catriel = new Persona("Catriel", "Cabrera", 20, 'https://picsum.photos/id/100/200/300')
const martin = new Persona("Martin","Paloschi", 20, 'https://picsum.photos/id/23/200/300')

// const personas = [juan, catriel, martin]

// for (const persona of personas) {
//   appendPersona(persona, app)
// }
