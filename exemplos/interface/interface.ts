// Defining an interface
/* Ex.: interface NameOfInterface {
  name: string;
  age: number;
} */

interface People {
  name: string;
  age: number
}

//Creating an object based

const developer: People = {
  name: 'Samuel',
  age: 18
}

//Optional properties
interface People1 {
  name: string;
  lastName?: string;
}
const dev1: People1 = {
  name: 'Samuel',
  lastName: 'Santos'
} //OK

const dev2: People1 = {
  name: 'Samuka'
} //OK


//Interface extend
//The interfaces can extend one or more interfaces, that's it, a interface can have declared properties in the other interface. This makes the interfaces and their properties more flexible and recyclable.

interface People2 extends People1{
  front: boolean;
}

const dev3: People2 = {
  name: 'Samuel',
  front: true,
  lastName: 'Santos'
}