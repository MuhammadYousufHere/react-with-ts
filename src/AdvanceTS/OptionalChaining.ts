type serializationOptions = {
  formatting?: {
    indent: number
  }

}
type serializationOptions_ = {
  formatting: {
    getIndent?: () => number
  }
}
// works well when something is optional
// if key is quotted then we can use index notation
// i,e 'indent-level' 
// options?.formatting?.['indent-level']

const serializeJSON = (value: any,
  // options?: serializationOptions,
  getOption?: serializationOptions_) => {
  // const indent = options?.formatting?.indent || 2 //x
  // const indent = options?.formatting?.indent ?? 2 // </
  const getIndex = getOption?.formatting?.getIndent?.()

  return JSON.stringify(value, null, getIndex)
  // return JSON.stringify(value, null, indent)
}

const person = {
  name: 'Asim',
  age: 22
}
// const json = serializeJSON(person, {
//   formatting: {
//     indent: 3
//   }
// })
const json = serializeJSON(person, {
  formatting: {
    getIndent: () => 2
  }
})
console.log(json)

// what if we have methods optionl??


// nullish coalecing
// it can be used insted of logicl or operator ||
// => which returns null falsy for all given instances

//  undefined || ?
//  2
//  false || ?
//  2
//  '' || ?
//  2
//  0 || ?
//  2
//  NaN || ?
//  2

// always right side get executed util right isn't one of above but nullish coalesing only checks for null and undefined , that's all!!




export const oc = {
  serializeJSON
}