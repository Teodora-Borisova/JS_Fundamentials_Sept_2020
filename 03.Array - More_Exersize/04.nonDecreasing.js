function solve(arr){

    let max = null;
    let newArr = [];

    for( let i = 0; i < arr.length; i++ ){
        if( arr[i] > max || max == null){
            newArr.push(arr[i]);
            max = arr[i];
        }
    }
    console.log(newArr.join(' '));
}
solve([20,3,2,15,6,1]);

// function solve(arr){

//     let sub = [];
//     arr = arr.map(Number);
//     let biggest = arr[0];

//     for (let i = 0; i < arr.length; i++) {
        
//         if( arr[i] >= biggest){
//             sub.push(arr[i]);
//             biggest = arr[i];
//         }
//     }
//     console.log(sub.join(' '));
    
// }
// solve([1,3,8,4,10,12,3,2,24]);