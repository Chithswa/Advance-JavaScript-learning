//Promise
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});
//.all()
Promise.all([p1, p2, p3]).then((values) => {
  console.log("All:",values);
});

//.allSetteled()
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log("Allsetteled:",values));

//.any()
const promise4 = Promise.reject(0);
const promise5 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise6 = new Promise((resolve) => setTimeout(resolve, 98, 'slow'));
const promises = [promise4, promise5, promise6];
Promise.any(promises).then((value) => console.log("Any:",value));

//.race()
const promise7 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});
const promise8 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});
Promise.race([promise7, promise8]).then((value) => {
  console.log("Race:",value);
});

//reject()
const p = Promise.resolve(1);
const rejected = Promise.reject(p);
console.log("Reject:",rejected === p); 
rejected.catch((v) => {
  console.log("Reject:",v === p); 
});

//resolve()
Promise.resolve("success").then((value)=>{
  console.log("Resolve:",value);
})

