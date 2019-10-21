/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { generateKey } = require(path.resolve(__dirname, fileName));

describe('1-remove', () => {
  const cases = [
    [ 5, 'ab9' ],
    [ 0, 'ab9' ],
    [ 16, 'abcdefghijklmnopqrstuvwxyz0123456789' ]
  ];
  it('should remove element from array', () => {
    for (const item of cases){
      const str = generateKey(item[0], item[1]);
      expect(str.length).toEqual(item[0]);
      str.split('').forEach(char => {
        expect(item[1].includes(char)).toEqual(true);
      })
    }
  });
})









