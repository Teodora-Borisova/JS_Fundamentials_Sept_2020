function solve(arr, arrTwo){

    let sum = 0;
    let areEqual = true;

    for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    sum += arr[i];
    }

    for (let i = 0; i < arrTwo.length; i++) {
        arrTwo[i]= Number( arrTwo[i]);  
        if ( arr[i] !== arrTwo[i]){
            console.log(`Arrays are not identical. Found differences at ${i} index.`);
            areEqual = false;
            break;
        }else ( areEqual);
    }
    console.log(`Arrays are identical. Sum: ${sum}`);

}
solve(['1','2','3', '4', '5'], ['1','2','4', '4', '5']);