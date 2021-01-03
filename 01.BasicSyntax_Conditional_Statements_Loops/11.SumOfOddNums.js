// function solve(n){

//     let sum = 0;
//     let count = 0;

//     for (let i = 1; i < 100; i++) {

//         if( i % 2 !== 0){   1 
//             count ++;
//             sum += i ;
//             console.log(i); 
//         }
        
//         if( count == n){
//             console.log(`Sum: ${sum}` )
//             break;
//         }
//     }
// }
// solve(5);


// function solve(n){

//     let sum = 0;
//     for ( let current = 1, count = 0; count < n; current += 2, count++){
//         console.log(current);
//         sum+= current;
//     }
    
//     console.log(sum);    
// }

// solve(5);

function solve(n) {

let count = 0;
let sum = 0;
let current = 1;

while ( count < n) {
    sum += current;
    console.log(current);

    current += 2;
    count ++;
    
}
console.log(sum);

}
solve(5);