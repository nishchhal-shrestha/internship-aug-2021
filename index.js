const interestCalculatorModule  = require('./closure');



console.log(process.argv);
console.log('firstname:', process.argv[2]);
console.log('lastname:', process.argv[3]);

let interestCalculator = interestCalculatorModule(process.argv[2], process.argv[3]);
console.log(interestCalculator.calculateInterestFunction());