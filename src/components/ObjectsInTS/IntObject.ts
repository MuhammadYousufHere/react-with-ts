// interfaces
// to define the shape of an object

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void
}
// can extend it

interface CloudCalender extends Calender {
  sync(): void
}
// leave noting on compile time purely for later use

// using
// trick ctrl + . to auto type 
export class GoggleCalender implements Calender {
  constructor(public name: string) { }
  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}