import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newnum = numbers.map(function (curr) {
  return curr * 3;
});
console.log(newnum);

//Filter - Create a new array by keeping the items that return true.
const newnum1 = numbers.filter(function (curr) {
  return curr > 50;
});
console.log(newnum1);
//Reduce - Accumulate a value by doing something to each item in an array.
const newnum2 = numbers.reduce(function (accu, curr) {
  return accu + curr;
});
console.log(newnum2);

//Find - find the first item that matches from an array.
const newnum3 = numbers.find(function (curr) {
  return curr > 40;
});
console.log(newnum3);
//FindIndex - find the index of the first item that matches.
const newnum4 = numbers.findIndex(function (curr) {
  return curr > 40;
});
console.log(newnum4);

const newMeaning = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});
console.log(newMeaning);
