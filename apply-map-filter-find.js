const students = [
  { id: 20, sName: 'Jihad' },
  { id: 9, sName: 'Ami' },
  { id: 1, sName: 'Jabed' }
];
// way 1
const nameArray = [];
for (let i = 0; i < students.length; i++) {
  const element = students[i];
  nameArray.push(element.sName);
}
console.log(nameArray);

// way 2
const result = students.map(x => x.sName);
console.log(result);

// extra practice of find and filter
const filter = students.filter(x => x.id > 1);
console.log(filter);

const find = students.find(x => x.id > 1);
console.log(find);