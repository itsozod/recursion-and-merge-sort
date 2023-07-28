// function to create fibonacci sequence with for loop and add numbers to array
function fibnumLoop(num) {
    let fibnumArray = [0, 1];
  
    if (num <= 2) {
      return fibnumArray.slice(0, num);
    }
  
    for (let i = 2; i < num; i++) {
      fibnumArray.push(fibnumArray[fibnumArray.length - 2] + fibnumArray[fibnumArray.length - 1]);
    }
    return fibnumArray;
  }
  
  console.log(fibnumLoop(8)); //   output: [0, 1, 1, 3, 5, 8, 13];