function solve(str){

let firstHalf = str.substring(0, str.length/2).split('').reverse().join('');
let secondHelf = str.substring(str.length/2).split('').reverse().join('');
console.log(firstHalf);
console.log(secondHelf);

}
solve('tluciffiDsIsihTgnizamAoSsIsihT');