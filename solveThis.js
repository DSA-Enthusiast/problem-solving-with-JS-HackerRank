// const checkIfSorted = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i + 1]);
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };
// const checkIfSorted = (arr) => {
//   const a = arr[0];
//   const b = arr[1];
//   const rest = arr.slice(1);
//   if (a > b) {
//     return false;
//   }
//   if (arr.length >= 3) {
//     return checkIfSorted(rest);
//   }
//   return true;
// };
// const checkIfSorted = (arr, i) => {
//   if (arr[i + 1] === undefined) return true;
//   if (arr[i] > arr[i + 1]) return false;
//   return checkIfSorted(arr, i + 1);
// };

// const checkIfSorted = (arr, i) =>
//   arr[i + 1] === undefined
//     ? true
//     : arr[i] > arr[i + 1]
//     ? false
//     : checkIfSorted(arr, i + 1);
// const problem = [1, 2, 3, 4, 5, 6, 9, 10]; // true
// const problem2 = [1, 2, 3, 4, 6, 5, 7, 8]; // false
// const problem3 = [50, 60, 70, 80];
// console.log(checkIfSorted(problem2, 0));

// function checkIsEqual (arr1, arr2){
//   for(let i = 0; i<arr1.length; i++){
//     if(arr1[i] === arr2[i]){
//     }else{
//       return false
//     }
//   }
//   return true
// }
// const arr1 =  [1,2,3,4,5,6,7,8];
// const arr2 =  [1,2,3,4,5,6,7,8];
// console.log(checkIsEqual(arr1, arr2))

const problem1 = 'ccsdfklsjlafkbbbbbjsadlfksdlfadklfsldkfjsdlf';

const problem2 = 'ddddddddasdlkfjlaskdfjlffffffffskdfj;asdlfkjas;df';

// const findCluster = (str) => {
//   for (let i = str.length - 1; i > 0; i--) {
//     if (str[i] == str[i - 1]) return str[i];
//   }
// };
const findLargestCluster = (str) => {
  let candidate;
  let count = 0;
  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] == str[i - 1]) {
      if (count == 0) {
        candidate = str[i];
        count++;
      } else if (candidate !== str[i]) {
        count--;
      }else{
        count++
      }
    }
  }
  return candidate;
};

console.log(findLargestCluster(problem2));
