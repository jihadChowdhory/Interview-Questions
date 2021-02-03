// way 1
const array = [1, 2, 3, 4, 5];
const array2 = [];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  const result = element * element;
  array2.push(result);
}
console.log(array2);

// way 2
const numbers = [1, 2, 3, 4, 5];
const numList = [];
numbers.map(function (item) {
  const result = item * item;
  numList.push(result);
})
console.log(numList);

// way 3
const nums = [1, 2, 3, 4, 5];
function square(num) {
  return num * num;
}
console.log(nums.map(square));

// way 4
const items = [1, 2, 3, 4, 5];
const result = items.map(x => x * x);
console.log(result);

const newItems = [1, 2, 3, 4, 5, 6, 7, 8];
const result1 = newItems.filter(x => x === 5);
console.log(result1);

const result2 = newItems.find(x => x > 5);
console.log(result2);