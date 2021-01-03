function solve(arr){

let step = Number(arr[arr.length - 1]);
let result = '';

for (let i = 0; i < arr.length - 1; i += step) {
    result += arr[i] + ' '; 
    
}

console.log(result);
}
solve([ '1', '2', '3', '4', '5', '6' ]);
solve([ 'dsa', 'asd', 'test', 'test', '2' ]);