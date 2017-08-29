describe("FizzBuzz", function() {
	var fizzBuzz;

	beforeEach(function() {
		fizzBuzz = new FizzBuzz();
	});

	it("will print 'Fizz' if the number is divisible by 3", function() {
		expect(fizzBuzz.play(3)).toEqual("Fizz");
	});

	it("will print 'Fizz' if the number is divisible by 5", function() {
		expect(fizzBuzz.play(5)).toEqual("Buzz");
	});

	it("will print 'Fizz' if the number is divisible by 15", function() {
		expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
	});
});