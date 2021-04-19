function  getMaxSubSum(arr) {
    let sumArr = arr[0];
    let maxArr = arr[0] ; 

    for(let i = 1 ; i < arr.length ; i++) {
        maxArr = Math.max(arr[i],maxArr + arr[i]);
        sumArr = Math.max(sumArr,maxArr);
    }
 return sumArr ; 
}