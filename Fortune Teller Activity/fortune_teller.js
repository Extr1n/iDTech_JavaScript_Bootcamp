// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
var fortune = (Math.random()*11);

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
if(10 >= fortune && fortune > 7){
    console.log("You will get a large amount of money soon (good)");
}
if(7>= fortune && fortune > 3){
    console.log("Someone will help you in the near future (average)");
}
if(3>= fortune && fortune >= 0){
    console.log("You will stub your toe in the near future (bad)");
}
