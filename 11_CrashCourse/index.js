var fullname = 'Banglore';
fullname = 'Del';
var num;
num = 23;
var names = [];
names.push('s');
function sum(a, b) {
    return a + b;
}
// console.log(sum(7, 2));
//Tuples
var address;
address = [111, 'bhopal', 46331];
var person;
person = { firstName: 'Jojo Mike' };
var anotherPerson;
anotherPerson = { firstName: 'Nilesh', age: 21 };
function add(a, b) {
    // optional only last parameters
    return b ? a + b : a;
}
console.log(add('2', '5'));
var p = {
    name: 'delta',
    id: 34,
    age: 34,
};
console.log(p);
//Union
var p1;
p1 = { name: 'APJ Abdul Kalam', age: 80, id: 23 };
p1 = { name: 'Lal Bahadur Shashtri', age: 70, id: 2 };
console.log(p1);
//InterSection
var p2;
p2 = { name: 'Sam Bahadur', id: 234, age: 96, rollNo: 1 };
var c;
c = 1;
c = 'one';
var n = []; // never array
//n.push('hello'); // can't push it never type
//classes
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car('Maruti');
c1.getBrand();
//public
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new Car('Lamborgini');
c2.getBrand();
console.log(c2.brand);
//private
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY('Jaguar');
c3.getBrand();
// c3.brand
//protected
var CarZ = /** @class */ (function () {
    function CarZ(brand) {
        this.brand = brand;
    }
    CarZ.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarZ;
}());
var c4 = new CarZ('Tata');
c4.getBrand();
// c3.brand
