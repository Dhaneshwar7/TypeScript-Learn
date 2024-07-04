"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variable  Primitive types
// String
var story = 'ye Dil Maange more';
var ok = 30;
story.toLowerCase();
// ok.loLowerCase()// it shows erroe it check type and gives error
console.log(story);
// Number
var userId = 3433.22;
console.log(userId);
userId.toFixed();
//BOolean
var isLoggedIn = true;
console.log(isLoggedIn);
//any
var hero;
function getHero() {
    return 'hello man';
}
hero = getHero();
hero();
