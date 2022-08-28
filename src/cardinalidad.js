import getConjuntoPotencia from "./conjuntoPotencia"

export default function getCardinalidad(array, sorted) {
  let conjuntoPotencia = getConjuntoPotencia(array, sorted)
  let cardinalidad = []
  conjuntoPotencia.map((subconjunto) => {
    cardinalidad.push(subconjunto.length)
  })
  return cardinalidad
}