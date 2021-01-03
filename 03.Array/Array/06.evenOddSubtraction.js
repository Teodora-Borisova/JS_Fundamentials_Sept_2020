function solve(arr){

    let evenSum = 0;
    let oddSum = 0;
    let result = 0;

    for( let i = 0; i < arr.length; i++){

        if( arr[i] % 2 == 0){
            evenSum += arr[i];
        }else {
            oddSum += arr[i];
        }
    }
    result = evenSum - oddSum;


console.log(result);

}
solve([2,4,6,8,10]);