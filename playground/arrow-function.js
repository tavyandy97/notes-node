var square = x => x*x;

var user = {
	name : 'Rohan',
	sayHi: () => {
		console.log(`Hi ${this.name}`);
	},
	sayHiAlt () {
		console.log(`Hi ${this.name}`);
	}
};

user.sayHi();
user.sayHiAlt();