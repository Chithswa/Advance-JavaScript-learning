//prototype
// object literals
const person ={
  alive: true
}
const musician {
  play:true
}
musician.__proto__ = person;
console.log(musician.play);
console.log(musician.alive);
console.log(musician);

Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician) == musician.__proto__);


