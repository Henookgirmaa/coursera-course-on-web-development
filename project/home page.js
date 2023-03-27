var message = "hello  man"
console.log("global: message = " + message)
var a = function(){
	var message = "this is me babe";
	console.log("my message for you is:" + message)
}
a();