let fullname: string = 'Banglore';
fullname = 'Del';

let num: number;
num = 23;

const names: string[] = [];
names.push('s');

function sum(a: number, b: number): number {
	return a + b;
}
// console.log(sum(7, 2));

//Tuples
let address: [number, string, number];
address = [111, 'bhopal', 46331];

let person: { firstName: string };
person = { firstName: 'Jojo Mike' };

let anotherPerson: { firstName: string; age?: number };
anotherPerson = { firstName: 'Nilesh', age: 21 };

function add(a: string, b?: string) {
	// optional only last parameters
	return b ? a + b : a;
}
console.log(add('2', '5'));

//interface
interface Person {
	name: string;
	id: number;
	age: number;
}
let p: Person = {
	name: 'delta',
	id: 34,
	age: 34,
};
console.log(p);

interface Student {
	name: string;
	rollNo: number;
	age: number;
}

//Union
let p1: Person | Student;
p1 = { name: 'APJ Abdul Kalam', age: 80, id: 23 };
p1 = { name: 'Lal Bahadur Shashtri', age: 70, id: 2 };
console.log(p1);

//InterSection
let p2: Person & Student;
p2 = { name: 'Sam Bahadur', id: 234, age: 96, rollNo: 1 };

//Type alias

type Count = string | number;
let c: Count;
c = 1;
c = 'one';
// c = false; // not assignable

type X = string & number; // never
const n: [] = []; // never array
//n.push('hello'); // can't push it never type

//classes

class Car {
	brand;
	constructor(brand) {
		this.brand = brand;
	}
	getBrand() {
		console.log(this.brand);
	}
}
let c1 = new Car('Maruti');
c1.getBrand();

//public
class CarX {
	constructor(public brand) {}
	getBrand() {
		console.log(this.brand);
	}
}
let c2 = new Car('Lamborgini');
c2.getBrand();
console.log(c2.brand);

//private
class CarY {
	constructor(private brand) {}
	getBrand() {
		console.log(this.brand);
	}
}
let c3 = new CarY('Jaguar');
c3.getBrand();
// c3.brand


//protected
class CarZ {
	constructor(protected brand) {}
	getBrand() {
		console.log(this.brand);
	}
}
let c4 = new CarZ('Tata');
c4.getBrand();
// c3.brand
