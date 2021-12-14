
function reverseTheArr(arr) {
  let start = 0;
  let end = arr.length-1;
  while(start<=end){
    [arr[end], arr[start]] = [arr[start],arr[end]];
    start++;
    end--;
  }
  return arr
}


const arrS = [1,2,3,10,4,5,6,7];

console.log(reverseTheArr(arrS))