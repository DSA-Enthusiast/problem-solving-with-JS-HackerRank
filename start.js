

// function vowelsAndConsonants(s) {
//   // s = s.toLowerCase();
//   const vowels = "aeiou";
//   for (let i = 0; i < s.length; i++) {
//     if (vowels.includes(s[i].toLowerCase())) {
//       console.log(s[i])
//     }
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (!vowels.includes(s[i].toLowerCase())) {
//       console.log(s[i])
//     }
//   }
// }

// vowelsAndConsonants("AfiulAlam")


// create an array of numbers
const nums = [7000, 5, 5, 3, 2, 1, 5, 0, 10, 20, 900]//length 100

const nums2 = [-50000, -100000, -1000000000000];

function getSecondLargest(nums) {
  let largest = Number.NEGATIVE_INFINITY; // 7000

  for (i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i]
    }
  }

  let secondLargest = Number.NEGATIVE_INFINITY; // 20
  for (i = 0; i < nums.length; i++) {
    // 900
    if (nums[i] > secondLargest && nums[i] < largest) {

      secondLargest = nums[i]
    }
  }
  return secondLargest;
}
// n = 100;
// 2
// O(2n) -> O(n);
// a


// create 2d array
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],

]
n == 100

const convert2Dto1D = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j])
      // for(...){}
    }
  }



  return newArr
}
// n^1+2+3

console.log(convert2Dto1D(arr))


6

// the k-loop has O(j-i) complexity

// the j-loop has O((n-i)*(n-i)) complexity

// the i-loop has O(n*n*n)=O(n^3) complexity

// anyway, you know that it is not O(n^2) because the first two loops are O(n^2) and it is not more than O(n^3) because there are only 3 loops

// https://stackoverflow.com/questions/18486543/what-is-the-complexity-of-this-nested-triple-for-loop
// function getSecondLargest(nums) {
// (n^2)^2 = n^4 

// O(n*n*n*n)  = O(n^4)

// n * 8= something bytes.
// O (n^2*1)
// O (n^3);
// console.log(getSecondLargest(nums))




















