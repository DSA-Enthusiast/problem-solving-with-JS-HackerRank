// const nums2 = [-50000, -100000, -1000000000000];
const numbers = [805, 5, 7000, 3, 2, 1, 5, 0, 10, 20, 905, 910, 12000, 900, 930, 8000, 13000];

const getSecondLargest = (arr) => {
  let large = Number.NEGATIVE_INFINITY;
  let secondLarge = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      secondLarge = large;
      large = arr[i];
    } else if (arr[i] > secondLarge) {
      secondLarge = arr[i]
    }
  }
  return secondLarge
}

console.log(getSecondLargest(numbers))



