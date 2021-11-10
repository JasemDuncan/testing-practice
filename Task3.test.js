const calculator = require('./Task3')
//Test For Methods
describe('Calculator methods', () => {
    test('Test add function',()=>{
        expect(calculator.add(18,22)).toBe(40);
    });
    test('subtract',()=>{
        expect(calculator.substract(22,18)).toBe(4);
    });
    test('divide',()=>{
        expect(calculator.divide(200,100)).toBe(2);
    });
    test('multiply', ()=>{
        expect(calculator.multiply(10,10)).toBe(100);
    });
});

//Group test for each methods
//Group test for ADD
describe('Group test for add method',()=>{
    test('Is not null',()=>{
        expect(calculator.add(18,22)).not.toBe('null');
    });
    test('Result is a postive number', ()=>{
        expect(typeof calculator.add(18,22)).toBe('number');
    });
});

//Group test for SUBSTRACT
describe('Group test for substract method',()=>{
    test('Is not null',()=>{
        expect(calculator.substract(22,18)).not.toBe('null');
    });
    test('Result is a postive number', ()=>{
        expect(typeof calculator.substract(22,18)).toBe('number');
    });
});


//Group test for DIVIDE
describe('Group test for divide method',()=>{
    test('Is not null',()=>{
        expect(calculator.divide(180,9)).not.toBe('null');
    });
    test('Result is a postive number', ()=>{
        expect(typeof calculator.divide(180,9)).toBe('number');
    });
});


//Group test for MULTIPLY
describe('Group test for multiply method',()=>{
    test('Is not null',()=>{
        expect(calculator.multiply(74,99)).not.toBe('null');
    });
    test('Result is a postive number', ()=>{
        expect(typeof calculator.multiply(74,99)).toBe('number');
    });
});



