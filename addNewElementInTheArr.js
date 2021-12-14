
function addNewElementInTheArr(arr, value, position){

    for (let i = arr.length-1;  position<=i; i--){
        arr[i+1] = arr[i]; 
    }
    arr[position] = value;
    return arr;
}
                //       6 => 6+1;
                //     5 => 5+1;
                //   4 => 4+1;
                // 3 => 3+1;
const arr = [1,2,3,10,4,5,6,7]; // 1, 2, 3, 10, 4, 5, 6, 7

// [
//     1, 2, 3, 4,
//     5, 5, 6, 7
//   ]
console.log(addNewElementInTheArr(arr, 10, 3));
