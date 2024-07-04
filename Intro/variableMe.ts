// Variable  Primitive types
// String
let story: string = 'ye Dil Maange more';
let ok: number = 30;
story.toLowerCase();
// ok.loLowerCase()// it shows erroe it check type and gives error

console.log(story);

// Number
let userId = 3433.22;

console.log(userId);
userId.toFixed();

//BOolean
let isLoggedIn: boolean = true;
console.log(isLoggedIn);

//any
let hero: any;

function getHero() {
	return 'hello man';
}
hero = getHero();
hero();

export {};
