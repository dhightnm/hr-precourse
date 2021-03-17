console.log('Hello, World');

function hello(name){
	// default name is"world"
	name = name || "world";
	console.log("Hello, " + name + "!");
}

hello();
