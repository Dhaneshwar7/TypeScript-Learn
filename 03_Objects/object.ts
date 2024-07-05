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
function createPerson(user: User):User {
    return { name: 'me', email: 'me@', isActiver: true };
}
createPerson({ name: 'me', email: 'me@', isActiver: true });


//Example 2




export {};
