'use strict';

// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const generateKey = (len, possible) => {
  let str = '';
  const randomNumber = () => Math.floor(Math.random() * possible.length);
  for (let i = 0; i < len; i++) {
    str += possible[randomNumber()];
  }
  return str;
};
// console.log(generateKey(2, 'abcdefghijklmnopqrstuvwxyz0123456789'))
module.exports = { generateKey };
