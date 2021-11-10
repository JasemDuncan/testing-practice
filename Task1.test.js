//1.- Test Character Count
const stringLength = require('./Task1');

test('test characters count',()=>{
    expect(typeof stringLength('abcde')).toBe('number');
  })