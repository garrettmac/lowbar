const toObject = (input) => {
  const obj = {}
  Object.keys(input).map((o) => obj[o] = input[o])
  return obj
}
export default toObject
