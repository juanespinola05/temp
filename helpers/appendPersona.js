function appendPersona(persona, container) {
  // * 1. Crear el article
  const card = document.createElement('article')
  // * 2. Crear el img
  const cardImg = document.createElement('img')
  // * 3. Modificar el src del img
  // ? <img src="martin.imagen" alt="martin.nombre">
  cardImg.src = persona.imagen
  // * 4. Modificar el alt del img
  cardImg.alt = persona.nombre
  // * 5. Crear el p para el nombre
  const cardName = document.createElement('p')
  // * 6. Agregar el nombre  apellido a ese p
  cardName.textContent = persona.nombre + " " + persona.apellido
  // * 7. Crear el p para la edad
  const cardAge = document.createElement('p')
  // * 8. Agregar la edad a ese p
  cardAge.textContent = persona.edad
  // * 9. Meter al img y a los dos p dentro del article
  card.appendChild(cardImg)
  card.appendChild(cardName)
  card.appendChild(cardAge)
  console.log(card)
  // * 10. Insertar todo en el DOM
  container.appendChild(card)
}

export default appendPersona
