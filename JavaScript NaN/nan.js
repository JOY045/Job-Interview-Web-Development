const userName = "Joy" / 5;
console.log(userName);  //NaN

const joy = NaN;
console.log(joy === joy);  //False

const result1 = "Joy" / 5;
const result2 = "Shoeb" / 5;
console.log(result1 === result2);  //False
// Two NaN never be equal

const array = [NaN];
const result = array.includes(NaN);
console.log(result);  //True