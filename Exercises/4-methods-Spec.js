/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const {  methods } = require(path.resolve(__dirname, fileName));

describe('4-methods', () => {
  const cases = [
    [{m1: x => [x], m2: function (x, y) {return [x, y];}, m3(x, y, z) {return [x, y, z];}},
      [['m1', 1], ['m2', 2], ['m3', 3]]
    ]
  ];

  it('should Introspect all properties of iface object', () => {
    for (const item of cases) {
      expect(methods(item[0])).toEqual(item[1]);
    }
  })
})
