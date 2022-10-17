// ##### Generic Class

export class Generic<K, V> {
  constructor(public key: K, public value: V) { }
}

const keyValuePairProvided = new Generic<number, string>(23, 'Cool thing this!')

// or not define
const keyValuePair = new Generic('dw2X', 'Cool thing this!')


// ###### Generic Function

function generic<T>(value: T) {
  return [value]
}

let array = generic([234, 35])

// ###### Generic Interfaces

interface Fetched<T> {
  data: T | null;
  error: string | null
}

function fetch<T>(url: string): Fetched<T> {
  return { data: null, error: null }
}

interface User {
  username: string
}
interface Product {
  title: string
}
let res = fetch<User>('www.someurl.com')
let respo = fetch<Product>('www.someurl.com')
let name = res.data?.username
let title = respo.data?.title


//#### Generic Constraints
// limiting options while setting func/class generic

function Print<T>(value: T): T {
  return value
}
Print('Hello')
Print(234)
Print(true)


// here comes constraints
function echo<T extends string | number>(value: T): T {
  return value
}
echo(2341)
echo("2341")
// echo(false) //Argument of type 'boolean' is not assignable to parameter of type 'string | number'

// also can pass object or constraints values 

function printName<T extends { firstname: string, lastname: string }>(name: T): T {
  return name
}

printName({ firstname: 'ali', lastname: 'khan' })

// also constraints by interface 

interface Pupil {
  name: string
}
function printStudent<T extends Pupil>(fullName: T): T {
  return fullName
}
printStudent({ name: 'Ali' })

// also constraints by class directly /indirectly drived from class passed after extends

// ##### Extending a genric clsss


interface Product {
  name: string;
  price: string
}

class Store<T> {
  // protected can be inherited but can't be accessed outside
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj)
  }
  // keyof ; key of generic type , kind of restricting genric type

  // if T is Product
  // then keyof return union of => 'name' | 'price' 
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value)
  }
}

let store = new Store<Product>()
// store.find('kola', 'af') // doest work
store.find('name', 'dj')
store.find('price', 3)

// => Passing on genric type parameters
// generic type in base can also be used in child class
// this used for that <T> =>  =>  => <T>
class CompressibleStore<T> extends Store<T> {
  compress() { }

}

// let store = new CompressibleStore()

// store.add([])


// => restricting the generic type parameter/args

class SearchableStore<T extends { name: string }> extends Store<T> {
  findByName(name: string): T | undefined {
    return this._objects.find(obj => obj.name === name)
  }
}

//=> Fix the generic type parameter

class ProductStore extends Store<Product>{
  filterByCategory(categor: string): Product[] {
    return []
  }
}

// So, when extending a generic class we have three options
// => Passing on genric type parameters
// => restricting the generic type parameter/args
// => Fix the generic type parameter


// # Type Mapping
// base a type on another type

interface Market {
  shops: object;
  people: string
}

type ReadOnlyMarket = {
  // index
  // keyof
  readonly [Property in keyof Market]: Market[Property]
}

let market: ReadOnlyMarket = {
  shops: [],
  people: ''
}
// make optional 
type newMarket<T> = {
  [Property in keyof T]?: T[Property]

}