function firstLast(inputArr){

let k = inputArr.shift();

let firstK = inputArr.slice(0, k);
console.log(firstK.join(' '));

let lastK = inputArr.slice(inputArr.length - k); //  or only -k;
console.log(lastK.join(' '));

}
firstLast([ 2, 7, 8, 9 ]);
firstLast([ 3, 6, 7, 8, 9 ]);