// Example of union type where can you two type type when not sure

let score: number | string = 45;
score = '34'; // allow ok
score = 12394; // allow ok

// Union Type with type
type User = {
	name: string;
	id: string;
};
type Admin = {
	username: string;
	id: number;
};
let userCreate: User | Admin = { name: 'lieutenant', id: '390' }; //ok
userCreate = { username: 'Brigadier', id: 3903 }; //ok

// Union Type with Fn
function gebDatabseId(id: number | string) {
	console.log(`Db id is ${id}`);
}
gebDatabseId(34); // ok
gebDatabseId('232093dfdfckj'); // ok

// Probleam comes inside of Fn like this and solve it by if else
function getId(id: number | string) {
	// id.toUpperCase()// throwing error
	if (typeof id === 'string') {
		id.toUpperCase();
		console.log(`Account Id is ${id.toUpperCase()}`);
	}
	console.log(`Account Id is ${id}`);
}
getId(234);
getId('dfjh3489');

/// Union type with Array
const Arr1: number[] = [2, 3, 3];
Arr1.push(234);
const Arr2: string[] = ['Alpha', 'Bravo', 'Charlie'];
Arr2.push('Zulu');
const Arr3: (number | string)[] = [122, 344, 'Alpha', 'Bravo'];
console.log(Arr1);
console.log(Arr2);
console.log(Arr3);

// Specific / Default value want to set like
let seatAllotment: 'Garib' | 'Middle' | 'Amir';
// seatAllotment= "crew" // error
seatAllotment = 'Middle';

export {};
