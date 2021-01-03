function solve(n, arr){

    let partialArr = [];

    for( let i = 0; i < n; i++){
        
        partialArr.push(arr[i]);
    }

    let result = '';
    for( let i = partialArr.length-1; i >= 0; i--){
        
    result += partialArr[i] + ' ';
    
    }
 
    console.log(result);
}
solve(3, [10, 20, 30, 40, 50]);

// let result = [];
// for ( let i = n -1; i >=0; i--){
//     result .push(arr[i]);
//     console.log(result.join(' '));
// }