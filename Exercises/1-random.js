'use strict';
// Generate random Number between from min to max
// Use Math.random() and Math.floor()
// See documentation at MDN
const random = (min = 0, max = min) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

console.log(random(0, 2));
module.exports = { random };
