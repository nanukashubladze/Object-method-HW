// 1. დავწეროთ ფუნქცია რომელიც მოგვცემს Object.entries() მსგავს შედეგს.
// input {a:1, b:2}
// output [['a', 1], ['b',2]]



// function customEntries(obj) {
//   return Object.keys(obj).map(key => [key, obj[key]]);
// }

// const input = {
//   a: 1,
//   b: 2
// };

// console.log(customEntries(input)); 

function customEntries(obj) {
  const entries = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      entries.push([key, obj[key]]);
    }
  }
  return entries;
}

const input = {
  a: 1,
  b: 2
};

console.log(customEntries(input));


// 2. დავწეროთ ფუნქცია რომელიც არგუმენტად მიიღებს ობიექტს.
// ფუნქციამ უნდა დააბრუნოს ყველა ფორფერთი სტრინგების მასივად
// input {a: 1, b:2}
// output ['a','b']
// არ გამოვიყენოთ Object.keys() ფუნქცია.


// function getKeysFromObject(obj) {
//   const keys = [];
//   for (const [key] of Object.entries(obj)) {
//     keys.push(key);
//   }

//   return keys;
// }

// const input2 = { a: 1, b: 2 };


// console.log(getKeysFromObject(input2));


function getKeysFromObject(obj) {
  const keys = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  return keys;
}

const input2 = { a: 1, b: 2 };

console.log(getKeysFromObject(input2))


// 3. დავწეროთ ფუნქცია რომელიც არგუმენტად მიიღებს ობიექტს.
// ფუნქციამ უნდა დააბრუნოს ყველა ფროფერთის მნიშვნელობა მასივად
// input {a: 1, b:2}
// output [1,2]
// არ გამოვიყენოთ Object.values() ფუნქცია.


// function getValuesFromObject(obj) {
//   const values = [];

//   for (const [, value] of Object.entries(obj)) {
//     values.push(value);
//   }
//   return values;
// }

// const input3 = { a: 1, b: 2 };


// console.log(getValuesFromObject(input3));


function getValuesFromObject(obj) {
  const values = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }

  return values;
}

const input3 = { a: 1, b: 2 };

console.log(getValuesFromObject(input3));


