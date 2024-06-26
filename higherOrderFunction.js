//higher Order Function 
//Map, filter, reduce
const number = [1,2,3,4];
const doubled =number.map(number => number * 2);
console.log("Map",doubled);
const evennumber = number.filter(number => number%2 ==0);
console.log("Filter",evennumber);
const sum = number.reduce((accumulator, number) => accumulator + number, 0);
console.log("Reduce",sum);
number.forEach(number => console.log("forEach",number *2));
const firstEven = number.find(number => number%2 ==0);
console.log("Find",firstEven);

