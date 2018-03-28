//Funkcja 'bez' właściciela
/*function sayHello() {
	console.log(this);
}
sayHello();

//Funkcja jako metoda obiektu
var person = {
	name: 'Jan',
	sayHello: function() {
		console.log('Hello ' + this.name + '!');
	}
}

sayHello person();*/

//
/*function Person(name) {
	this.name = name;
	this.sayHello = function() {
		console.log('Hello ' + this.name + '!');
	};
}
var p1 = new Person('Jan');
var p2 = new Person('Zbigniew');

p1.sayHello()
p2.sayHello()*/

//Gubienie kontekstu
/*var person = {
	name: "Jan",
	sayHello: function() {
		console.log("Hello "  + this.name + "!");
    }
}
var hello = person.sayHello;

hello()*/

function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		this.$element.appendTo($('body'));
	}
}

var btn1 = new Button('Hello!');

btn1.create();