const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const copy1 = numbers.slice(2, 5);
console.log(copy1);
console.log(numbers);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const copy2 = numbers2.splice(2, 3, 10, 11, 12, 13);
console.log(copy2);
console.log(numbers);

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const copy3 = numbers3.join(',');
console.log(copy3);
console.log(numbers3);