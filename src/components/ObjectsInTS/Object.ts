
export class Account {
  readonly id: number;
  user: string;
  private _balance: number;
  millionare: boolean;
  paysZakkat?: boolean;
  constructor(
    id: number,
    user: string,
    balance: number,
    millionare: boolean) {
    this.id = id;
    this.user = user;
    this._balance = balance;
    this.millionare = millionare

  }
  widthdraw(amount: number): void {
    if (this._balance <= 0)
      throw new Error('Your current account balance is insufficient to widthdraw, please deposit!');
    this._balance -= amount
  }
  deposit(amount: number): void {
    if (amount <= 0)
      throw new Error('Invalid amount!');
    this._balance += amount
  }
  checkBalance(): number {
    return this._balance
  }
  private monthlySMSCharges(): number {
    return this._balance -= 140
  }
  // or could use get to make it read-only
  // make sure to always return something while using get
  get transactionHistory(): string {
    return `Last month transaction history is ...`
  }
}

// # Parameter properties
// using parameter properties to make class concise and clean
export class AccountConcise {
  paysZakkat?: boolean;
  constructor(
    public readonly id: number,
    public user: string,
    public _balance: number,
    public millionare: boolean) {

  }
}

// # Index signatrue
// => to create properties dynamically like we do in js with type safety


export class BusTicket {
  [seatNumber: string | number]: string | number
}

// # Static Property
// => Belongs only to class not to initialized object and have only single instance of it in memory and can't be accessed by using this

export class Ride {
  private static _activeRides = 0

  start() { Ride._activeRides++ }
  stop() { Ride._activeRides-- }
  static get activeRides(): number {
    return Ride._activeRides
  }
}

// # Inheritance

export class Person {
  constructor(public firstName: string, public lastName: string, public email: string) {

  }
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
  read() {
    console.log('reading...')
  }

}


export class Student extends Person {
  constructor(teacherId: number, firstName: string, lastName: string, email: string) {
    super(firstName, lastName, email)
  }
  learn() {
    console.log('learning')
  }
}

export class Teacher extends Person {

  // override some already created methods
  override get fullName() {
    return 'Professor ' + this.firstName + ' ' + this.lastName
  }
}
export class Principal extends Person {

  // override some already created methods
  override get fullName() {
    return 'Principal ' + this.firstName + ' ' + this.lastName
  }
}

// #polymorphism

// get peoples
printNames([
  new Student(1, 'Ahmed', 'Mirza', 'ahmed@gmail.com'),
  new Teacher('Adil', 'Khan', 'ahmed@gmail.com'),
  new Principal('Razaque', 'Mujeeb', 'ahmed@gmail.com'),
]);

// this is called polymorphism

// using single code base for different use case
function printNames(peoples: Person[]) {
  for (let person of peoples) {
    console.log(person.fullName);
  }
}

// Private vs Protected
// private can't be accessed outside the class and also
// protected but protected can be inherited to different instances of class are less used or you should know why youre in need of.



// Abstarct class and Methods
// used for preventing instancing a class but can be extented
// abstarct Methods can only be used in abstract class and no need of func body

abstract class Shape {
  constructor(public color: string) { }
  abstract render(): void

}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color)
  }
  override render(): void {
    console.log('rendering')
  }
}

// let shape = new Shape('red')
// shape.render(); //doest make sense
// to stop that permanately use abstract