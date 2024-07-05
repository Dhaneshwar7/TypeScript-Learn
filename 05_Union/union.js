"use strict";
// Example of union type where can you two type type when not sure
Object.defineProperty(exports, "__esModule", { value: true });
var score = 45;
score = '34'; // allow ok
score = 12394; // allow ok
var userCreate = { name: 'lieutenant', id: '390' }; //ok
userCreate = { username: 'Brigadier', id: 3903 }; //ok
// Union Type with Fn
function gebDatabseId(id) {
    console.log("Db id is ".concat(id));
}
gebDatabseId(34); // ok
gebDatabseId('232093dfdfckj'); // ok
// Probleam comes inside of Fn like this and solve it by if else
function getId(id) {
    // id.toUpperCase()// throwing error
    if (typeof id === 'string') {
        id.toUpperCase();
        console.log("Account Id is ".concat(id.toUpperCase()));
    }
    console.log("Account Id is ".concat(id));
}
getId(234);
getId('dfjh3489');
/// Union type with Array
var Arr1 = [2, 3, 3];
Arr1.push(234);
var Arr2 = ['Alpha', 'Bravo', 'Charlie'];
Arr2.push('Zulu');
var Arr3 = [122, 344, 'Alpha', 'Bravo'];
console.log(Arr1);
console.log(Arr2);
console.log(Arr3);
