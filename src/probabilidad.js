import getConjuntoPotencia from "./conjuntoPotencia"

export default function getProbabilidad(arr, sorted) {
  let conjuntoPotencia = getConjuntoPotencia(arr, sorted)
  let probabilidad = []
  conjuntoPotencia.map((subconjunto) => {
    probabilidad.push(subconjunto.length / arr.length)
  })
  return probabilidad
}