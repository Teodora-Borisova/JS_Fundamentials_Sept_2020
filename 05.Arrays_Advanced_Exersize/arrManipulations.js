function solve(arr){

let newArr = arr.shift().split(' ').map(Number);

for (let i = 0; i < arr.length; i++) {
    
let[command, firstNum, secondNum] = arr[i].split(' ');
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    switch ( command){
        case 'Add':  ;break;
        case 'Remove': ;break;
        case 'RemoveAt': ;break;
        case 'Insert': ;break;
    }
}

function add(el){
    arr.push(el);
}

function remove(num){
    newArr = newArr.filter( el => el !== num)
}
console.log(arr);


}
solve([ '4 19 2 53 6 43',
'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3' ]);