/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { ipToInt } = require(path.resolve(__dirname, fileName));

describe('3-ip', () => {
  const cases = [
    ['127.0.0.1', 2130706433],
    ['10.0.0.1', 167772161],
    ['192.168.1.10', -1062731510],
    ['165.225.133.150', -1511946858],
    ['0.0.0.0', 0],
    ['8.8.8.8', 0x08080808],
  ];

  it('should Parse ip address and convert with sitwise shift', () => {
    for (const item of cases) {
      expect(ipToInt(item[0])).toEqual(item[1]);
    }
  })
})
