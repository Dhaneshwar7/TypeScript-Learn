//This is Normal Object
const myObject = {
	name: 'HackerKernel',
	email: 'hk@gmail.com',
	isActive: true,
};

// function createUserr({ namee: any }) {
// 	return { namee };
// }
// createUserr('delta');

function createCourse(): { name: string; price: number } {
	return { name: 'react', price: 7363 };
}
console.log(createCourse());

// ------ type aliases ----
// Example 1
type User = {
	name: string;
	email: string;
	isActiver: boolean;
};
function createPerson(user: User): User {
	return { name: 'me', email: 'me@', isActiver: true };
}
createPerson({ name: 'me', email: 'me@', isActiver: true });

//Example 2  -- ?  -- Readonly

type Admin = {
	//without readonly its mutable
	readonly _id: string;
	name: string;
	email: string;
	isActive: boolean;
	creditcardDetails?: number; // ? optional  ,no  error
};

let myUser: Admin = {
	_id: 'fd3j2390',
	name: 'jojo',
	email: 'j@j.com',
	isActive: true,
};

// myUser._id = '38493'; // it not mutable bcs of readonly
console.log(myUser._id); /// its consoling same which already decalare in first place

// MIXING TYPES

type cardNumber = {
	cardnumber: number;
};
type cardDate = {
	cardDate: number;
};
type CardDetails = cardNumber &
	cardDate & {
		cardCvv: number;
	};

export {};
