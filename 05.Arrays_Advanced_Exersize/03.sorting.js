function solve(arr){

let result = [];
array = arr.sort((a, b) => a -b);
while ( array.length !== 0){
    result.push( array[array.length - 1]) && array.pop();
    result.push( array[0]) && arr.shift();

}
console.log(result.join(' '));

}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);