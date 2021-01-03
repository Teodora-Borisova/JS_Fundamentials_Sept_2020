function solve(arrOne, arrTwo){


    let specialNum = arrTwo.shift();
    let power = arrTwo.shift();

    for (let i = 0; i < arrOne.length; i++) {
        let num = arrOne[i];
       

        if( arrOne[i] == specialNum ){
            let bombIndex = arrOne.indexOf(specialNum);
            let startIndex = bombIndex - power;
            arrOne.splice(bombIndex, power+1 );
            arrOne.splice( startIndex, power)
            i = 0;
        }
        
    }

    let result = arrOne.reduce((sum, num) => sum += num);
    console.log(result);
    

}
solve([ 1, 2, 2, 4, 2, 2, 2, 9], [ 4, 2 ]);