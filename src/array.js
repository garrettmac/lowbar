




const toObject=(input)=>{
    let obj={}
    Object.keys(input).map(o =>obj[o]=input[o])
    return obj
}


export {
  toObject
}
