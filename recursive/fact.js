function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', number => {
    const n = parseInt(number);
    if (isNaN(n)) {
        console.log("Please enter a valid number.");
    } else {
        try {
            console.log(`Factorial of ${n} is ${factorial(n)}`);
        } catch (error) {
            console.log(error.message);
        }
    }
    readline.close();
});
