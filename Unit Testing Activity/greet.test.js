var utils  = require('course-utilities');
const { TestScheduler } = require('jest');
var greet = utils.load('./greet.js', 'greet');

var name = "joe";
var list = ['Alex','Arsene','Jose','Zidane']

test('outputs the greeting with name', () => {
    expect(greet(name)).toBe("Hello, "+name)
});

test('outputs the greeting with no name', () => {
    expect(greet("")).toBe("Hello there!")
});

test('outputs the greeting with uppercase name', () => {
    expect(greet(name.toUpperCase())).toBe("HELLO " + name.toUpperCase() +"!")
});

test('outputs the greeting with list of names', () => {
    expect(greet(list)).toBe("Hello, Alex, Arsene, Jose, Zidane")
});