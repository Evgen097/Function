/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');
const { random } = require( path.resolve(__dirname, fileName) );


describe(`1-random`, ()=> {

  describe(`exists tes cases`, ()=> {
    const cases = [
      [ 1, 2 ],
      [ 1, 10 ],
      [ 10, 100 ],
      [ 100, 1000 ],
    ];
    it(`should return random number`, ()=> {
      for (const item of cases){
        const num = random(item[0], item[1]);
        expect(num >= item[0]).toEqual(true);
        expect(num <= item[1]).toEqual(true);
      }
    })
  })

  describe(`random test cases`, ()=> {

    const cases = [ 100, 10000000000 ];
    const generetedNumbers = [];
    const iterations = 1000;

    it(`should not repeat random number`, ()=> {
      for (let i = 0; i < iterations; i++){
        const num = random(cases[0], cases[1]);
        expect(generetedNumbers.includes(num)).toEqual(false);
        generetedNumbers.push(num);
        expect(num >= cases[0]).toEqual(true);
        expect(num <= cases[1]).toEqual(true);
      }
    })

  })


})

