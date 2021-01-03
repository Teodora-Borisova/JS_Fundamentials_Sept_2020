function solve(arg1, arg2){
    let firstNum = Number(arg1);
    let lastNum = Number(arg2)
    let printResult = "";
    let sum = 0;

    for (let i = firstNum; i <= lastNum; i++) {
        printResult += i + ' ';
    }
    console.log(`${printResult}`);

    for (let i = firstNum; i <= lastNum; i++) {
        
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}

solve(5, 10);


// for (let i = firstNum; i <= lastNum; i++) {
//     printResult += i + ' ';
//     sum += i;
// }
// console.log(printResult);
// console.log(`Sum: ${sum}`);

