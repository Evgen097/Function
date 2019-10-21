'use strict';
// Introspect all properties of iface object and
// extract function names and number of arguments
// For example: {
//   m1: x => [x],
//   m2: function (x, y) {
//     return [x, y];
//   },
//   m3(x, y, z) {
//     return [x, y, z];
//   }
// will return: [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]

// 4. Реализуйте интроспекцию объекта:
//   - Проитерируйте все ключи объекта `iface`
// - Возьмите ключи функционального типа
// - Для каждой функции возьмите длину
// - Сохраните результаты в двумерный массив

const methods = iface => Object.keys(iface)
  .map(prop => [prop, iface[prop].length]);

module.exports = { methods };


// const methods = iface => {
//   const objMethods = [];
//   for (const prop in iface) {
//     if (!iface.hasOwnProperty(prop) ||
//       typeof iface[prop] !== 'function') continue;
//     const propLength = iface[prop].length;
//     objMethods.push([prop, propLength]);
//   }
//   return objMethods;
// };

