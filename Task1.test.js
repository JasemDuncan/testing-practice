//1.- Test Character Count
// const stringLength = require('./Task1');

// test('test characters count',()=>{
//     expect(typeof stringLength('abcde')).toBe('number');
//   })


const stringLength = require('./Task1');

test('test characters count',()=>{
    expect(stringLength('12345678910')).toBeFalsy();
  })
  

