//Falsy values
// NaN
// null
// undefined
// 0
// ''
// false

//Truthy values
// string without empty
// number without 0
// []
// {}
// true
const variableName = NaN;
if (variableName) {
  console.log('Condition is true');
}
else {
  console.log('Condition is false');
}