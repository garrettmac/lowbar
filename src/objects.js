

const removeFalsy=(o)=> _.each(o, (v, k)=> {if(!v) delete o[k];});








export {
  removeFalsy
}
