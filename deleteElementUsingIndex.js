
function addNewElementInTheArr(arr,position){
     for (let i = position;  i < arr.length -1; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    return arr;
    
}


const arrR = [1,2,3,10,4,5,6,7]; 

console.log(addNewElementInTheArr(arrR, 3))
