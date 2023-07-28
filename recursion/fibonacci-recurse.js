// function to create a fibonacci sequence with recursion and add numbers to array
function fibnumRecurs(num, fibnumArray = [0, 1]) {
    if (fibnumArray.length >= num) {
      return fibnumArray.slice(0, num);
    }
    else {
      const fibNum = fibnumArray[fibnumArray.length - 2] + fibnumArray[fibnumArray.length - 1];
      fibnumArray.push(fibNum);
      return fibnumRecurs(num, fibnumArray);
    }
  }
  
  console.log(fibnumRecurs(8)); //   output: [0, 1, 1, 3, 5, 8, 13];