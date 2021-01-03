function solve(arr){

    for (let i = 0; i < arr.length; i++) {
        let index = arr.indexOf(arr[i], i+1);

        while( index !== -1){
            arr.splice( index, 1);
            index = arr.indexOf(arr[i], i + 1);
        }
    }

console.log(arr.join(' '));

}
//solve([1,2,3,4])
solve([7,8,9,7,2,3,4,1,2])


/*

let newArr = [];
for ( let i = 0; i < arr.length; i++ ){
    let indexOfEl = arr.indexOf(arr[i]);
    if( i === indexOfEl){
        newArr.push(arr[i]);
    }

}
console.log(newArr.join(' '));
*/

// function solve(arr){

//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
    
//         for (let j = 0; j < arr.length; j++) {
//             let el = arr[j+1];
//             if( num == el){
//                 let index = arr.indexOf(arr[j], j+1)
//                 if( index != -1){
//                     arr.splice( index, 1);
    
//                 }
//             }
//         }
//     }
    
//     console.log(arr.join(' '));
    
//     }
//     solve([7,8,9,7,2,3,4,1,2]);