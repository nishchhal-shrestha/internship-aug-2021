const interestCalculatorModule = (principal, numberOfYears) => {
    let rate = 10;

    const findRandomNumber = () => {
        return Math.random();
    }

    const setRandomInterest = () => {
        rate = Math.round(findRandomNumber() * 100);
    }

    const setInterest = (interest) => {
        rate = interest;
    }

    const currentInterestRate = () => {
        return rate
    }

    const calculateInterest = () => {
        return {
            result: (principal * rate * numberOfYears)
        }         
    }

    return {
        setRandomInterestFunction: setRandomInterest,
        calculateInterestFunction: calculateInterest,
        setInterest : setInterest,
        currentInterestRate: currentInterestRate
    }
}

module.exports = interestCalculatorModule
