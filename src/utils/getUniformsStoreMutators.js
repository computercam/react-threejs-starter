export default function getUniformsStoreMutators (uniforms, set) {
  const setter = (property) => 
    (value) => 
      set(state => 
        ({ [property]: { value } }))

  return Object.keys(uniforms)
    .reduce((pre, cur) => 
      ({...pre, ...{[`_${cur}`]: setter(cur) }}), {})
}