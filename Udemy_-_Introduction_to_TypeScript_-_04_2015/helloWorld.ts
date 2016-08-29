class Person{
	protected name: string;

	constructor(name:string){
		this.name= name;
	}
	dance(){
		console.log(this.name + " is dancing");
	}
}

var robb = new Person("John");
robb.dance();


class AwesomePerson extends Person{
	dance(){
		console.log(this.name +", is Sooooo Awesome");
		super.dance();
	}
}

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