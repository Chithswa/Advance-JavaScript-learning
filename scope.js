let x = 10;
const parentFunction = () =>
  {
    let myvalue = 20;
    console.log(x);
    console.log(myvalue);

    const childFunction = () =>
      {
        console.log(x +=5);
        console.log(myvalue +=1);
      }
       return childFunction
  }
  const result = parentFunction();
  console.log(result);

  result();
  result();
  result();
  console.log(x);

  //IIFE
  const privatecounter =(() =>{
    let count = 0;
    console.log(`initial value: ${count}`);
    return () =>{count +=1 ; console.log(count)}

  })();
  privatecounter();
  privatecounter();
  


