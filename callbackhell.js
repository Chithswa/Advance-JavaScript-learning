function asyncFunction1(callback) {
  setTimeout(() => {
    console.log("Async Function 1 Done");
    callback();
  }, 1000);
}

function asyncFunction2(callback) {
  setTimeout(() => {
    console.log("Async Function 2 Done");
    callback();
  }, 2000);
}

function asyncFunction3(callback) {
  setTimeout(() => {
    console.log("Async Function 3 Done");
    callback();
  }, 3000);
}
asyncFunction1(() => {
  asyncFunction2(() => {
    asyncFunction3(() => {
      console.log("All Async Functions Completed");
    });
  });
});