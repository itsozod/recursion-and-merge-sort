function mergeSort(array) {
    if (array.length === 0) {
      return "Array is empty";
    } else if (array.length === 1) {
      return array;
    } else {
      const mid = Math.floor(array.length / 2);
      const left = array.slice(0, mid);
      const right = array.slice(mid, array.length);
      return merge(mergeSort(left), mergeSort(right));
    }
  }
  
  function merge(leftSide, rightSide) {
  
    let i = 0;
    let j = 0;
    let result = [];
  
    while (i < leftSide.length && j < rightSide.length) {
      if (leftSide[i] < rightSide[j]) {
        result.push(leftSide[i++])
      } else {
        result.push(rightSide[j++])
      }
    }
  
    while (i < leftSide.length) {
      result.push(leftSide[i++])
    }
  
    while (j < rightSide.length) {
      result.push(rightSide[j++])
    }
    
    return result;
  }
  console.log(mergeSort([12, 1, 3, 109, 45, 67, 90, 55]));