"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Number argment if we use any num method or any Arthematic logic
function add(num) {
    return num + 2;
}
function mult(num) {
    // after parameter for strict return check we have to : type
    return num * 4;
    // return 'he he multiplication';
}
console.log(mult(6)); // this is working but this returns me string LOL
var ok = add(5);
console.log(ok);
//String argument if we use any string method
function getUppercase(caf) {
    return caf.toUpperCase();
}
console.log(getUppercase('ok man'));
// Real Situtaion in JS (Bad Practice)
function regularSignUpUser(name, email, isLogin) {
    //this is how we write in js but what if any user/developer somthing else
}
// regularSignUpUser(1, 2, 3); // its not giving any error while converting to JS but it should be
// Real Situtaion in TS (Good Practice)
function tsSignUp(name, email, isLogin) {
    if (isLogin === void 0) { isLogin = true; }
    //Yaaa, this is right way
    return { name: name, email: email, isLogin: isLogin };
}
// tsSignUp(1,2,3)//now its showing error one by one
var tsss = tsSignUp('ok', 'ok@gmail.com'); // if you will give third argument you have to give default while giving paramater to function
// const tsss = tsSignUp('delta', 'd@d.com', false); // So gave proper values
console.log(tsss);
//arrow function
var getHello = function (some) {
    return "how you doing ".concat(some);
};
console.log(getHello('dk'));
//Array detect types  in ts if all are same
var heroes = ['vikram batra', 'manoj pandey', 'sam manekshaw'];
// const heroes= [1, 2, 3, 4, 5];
var hrResult = heroes.map(function (hero) {
    return "Indian Army Hero ".concat(hero.toUpperCase());
});
console.log(hrResult);
// Console Error -- void
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError("eeeerooor");
//Handling Error 
function handelError(errmsg) {
    throw new Error(errmsg);
}
handelError('eeeerooor');
