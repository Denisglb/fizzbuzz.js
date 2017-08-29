function FizzBuzz() {


	this.play = function(i) {
		if (i % 3 == 0 && i % 5 == 0) {
			return("FizzBuzz");
		}
		else if (i % 3 == 0) {
			return("Fizz");
		}
		else if (i % 5 == 0) {
			return("Buzz");
		}
		else return(i);
	}
}

var fizzBuzz = new FizzBuzz();


for (var i=1; i<=100; i++) {
	console.log(fizzBuzz.play(i));
}