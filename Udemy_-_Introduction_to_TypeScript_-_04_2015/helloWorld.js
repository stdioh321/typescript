var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
}());
var robb = new Person("John");
robb.dance();
var AwesomePerson = (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        _super.apply(this, arguments);
    }
    AwesomePerson.prototype.dance = function () {
        console.log(this.name + ", is Sooooo Awesome");
        _super.prototype.dance.call(this);
    };
    return AwesomePerson;
}(Person));
var bran = new AwesomePerson("Bran");
bran.dance();
// interface  Stark{
// 	name: string,
// 	age?: number
// }
// function getName(stark: Stark){
// 	console.log(stark.name);
// }
// getName({
// 	name:"Jaozinho"
// });
// class Stark{
// 	name: string = "Brandon";
// 	static castle: string = "Castle Black";
// 	saying: string;
// 	constructor(){
// 		this.saying = "Winterfell";
// 	}
// 	hello(person:string){
// 		console.log("Hello, " + person);
// 	}
// }
// var ned = new Stark();
// console.log(ned);
// ned.hello("Robb"); 
