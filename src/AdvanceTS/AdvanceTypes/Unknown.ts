// in typescript all types are assignable to 'any' type, but this what we intent to avoid using b/c we don't get any protection from typescript abd lose type coverage

// But 
// we can use unknown
// any vs unknown
// essentially flipping the default from allowing every to allowing almost nothing

// we can't simply use defined varable recklessly we need to tell the type before using it. i.e narrow down the unknown type to something specific by 
// => checking with typeof conditionally 
// using overload signature method
// i.e


// always use unknown instead of any
// initialize a varable
let anotherVal: unknown


let value: any;
value = 5
value = true;
value = 'string'
value = null;
value = undefined;
value = NaN;
value = [];
value = {}
value = Math.random


anotherVal = 'Hello'
// anotherVal.toUpperCase()
// sol 
if (typeof anotherVal === 'string') {
  let upperCase = anotherVal.toUpperCase()
  console.log(upperCase)
}
// ==========================================================

// use asserts type
// typescript understand the implication that this behaviour has on the control flow of the program

//simple
function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new Error(message)
  }
}

//specialized
function assertIsNumber(value: unknown, name: string): asserts value is number {
  if (typeof value !== 'number') {
    throw new Error(`Expected ${name} to be a number`)
  }
}

//overload signature method
function rangeArr(start: number, end: number): number[]
function rangeArr(start: unknown, end: unknown): number[] {
  // what if we want to implement this assertion outside this func? 

  // if (typeof start !== 'number' || typeof end !== 'number') {
  //   throw Error('rangeArr() expect from and to, to be number')
  // }

  // assert(typeof start === 'number' && typeof end === 'number',
  // 'rangeArr() expect from and to, to be number')
  // or you can use seperate assert for each arg
  // assert(typeof start === 'number', 'start must be a number')
  // assert(typeof end === 'number', 'end must be a number')
  // or use specialize assertfunc
  assertIsNumber(start, 'start')
  assertIsNumber(end, 'end')
  let arr: number[] = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

export const RangeGen = {
  rangeArr
} 