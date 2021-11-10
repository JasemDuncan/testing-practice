
class Calculator {
    add(num1,num2){
        return num1 + num2;
    }
    substract(num1,num2){
        return num1 - num2;
    }
    divide(num1,num2){
        return num1 / num2;
    }
    multiply(num1,num2){
        return num1 * num2;
    }
}

const objCalculator = new Calculator

module.exports = objCalculator;