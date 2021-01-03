function solve(firstArr, secondArr){

    
    for (const element of firstArr) {
        for (const secondEl of secondArr) {
            if( element === secondEl){
                console.log(element);
                
            }
        }
    }

// for (const el of firstArr) {
//     let isCommon = secondArr.includes(el);
//     if( isCommon){
//         console.log(el);
        
//     }
// }

}
solve([ 'Hey', 'hello', 2, 4, 'Peter', 'e' ], [ 'Petar', 10, 'hey', 4, 'hello', '2' ]);

