module Helper{
	
	export class Language{
		static plusTwo(n:number):number{
			return n *2;
		};
		static greeting: string = "Bonjour";
		instance():string{
			return "My new Instance";
		};
	}
}