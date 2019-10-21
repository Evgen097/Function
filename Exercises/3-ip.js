'use strict';

// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with sitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop

const ipToInt = (ip = '127.0.0.1') => {
  const ipArray = ip.split('.').map(el => parseInt(el, 10));
  let sitWiseCounter = ipArray.length - 1;
  for (let j = 0; j < ipArray.length; j++) {
    for (let i = 0; i < sitWiseCounter; i++) {
      ipArray[j] <<= 8;
    }
    sitWiseCounter--;
  }
  return ipArray.reduce((acc, item) => acc + item);
};
console.log(ipToInt.toString().length);
// console.log(ipToInt('10.0.0.1'))
module.exports = { ipToInt };
