export default function getConjuntoPotencia(array, sorted) {
  let conjuntoPotencia = [[]]
  let conjuntoPotenciaSolucion = [[]]
  const length = array.length

  const tam_conjuntoPotencia = Math.pow(2, length)

  for (let i = 0; i < tam_conjuntoPotencia; i++) {
    let subconjunto = []
    for (let j = 0; j < length; j++) {
      // Hacemos la comparacion de bits
      if (i & (1 << j)) {
        subconjunto.push(array[j])
      }
    }
    if (i !== 0) {
      conjuntoPotencia.push(subconjunto)
    }
  }

  if (sorted === 'min-max') {
    for (let i = 0; i < length; i++) {
      conjuntoPotencia.map((subconjunto) => {
        if (subconjunto.length === i) {
          conjuntoPotenciaSolucion.push(subconjunto)
        }
      })
    }
    conjuntoPotenciaSolucion.shift()
    conjuntoPotenciaSolucion.push(array)
    return conjuntoPotenciaSolucion
  } else if (sorted === 'max-min') {
    for (let i = length; i >= 0; i--) {
      conjuntoPotencia.map((subconjunto) => {
        if (subconjunto.length === i) {
          conjuntoPotenciaSolucion.push(subconjunto)
        }
      })
    }
    conjuntoPotenciaSolucion.shift()
    return conjuntoPotenciaSolucion
  } else {
    return conjuntoPotencia
  }
}

