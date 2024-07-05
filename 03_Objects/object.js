"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//This is Normal Object
var myObject = {
    name: 'HackerKernel',
    email: 'hk@gmail.com',
    isActive: true,
};
// function createUserr({ namee: any }) {
// 	return { namee };
// }
// createUserr('delta');
function createCourse() {
    return { name: 'react', price: 7363 };
}
console.log(createCourse());
function createPerson(user) {
    return { name: 'me', email: 'me@', isActiver: true };
}
createPerson({ name: 'me', email: 'me@', isActiver: true });
var myUser = {
    _id: 'fd3j2390',
    name: 'jojo',
    email: 'j@j.com',
    isActive: true,
};
// myUser._id = '38493'; // it not mutable bcs of readonly
console.log(myUser._id); /// its consoling same which already decalare in first place
