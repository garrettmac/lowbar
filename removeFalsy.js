import each from './each'
const removeFalsy = (o) => each(o, (v, k) => {
  if (!v) {
    delete o[k]
  }
})
export default removeFalsy
