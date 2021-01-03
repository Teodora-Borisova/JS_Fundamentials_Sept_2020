function solve(input){

let numArray = input.shift().split(' ').map(Number);
let command = input.shift();

while( command !== 'end'){
    let tokens = command.split(' ');
    
    switch( tokens[0]){
        case 'swap': {
            let index1 = Number(tokens[1]);
            let index2 = Number(tokens[2]); 
            let temp = numArray[index1];
            numArray[index1] =  numArray[index2];
            numArray[index2] = temp;
            break;
        }
            
        case 'multiply': {
            let index1 = Number(tokens[1]); 
            let index2 = Number(tokens[2]);
            numArray[index1] *= numArray[index2]; 
            break;
        }
            
        case 'decrease': 
            numArray = numArray.map(x => x - 1);
            break;    
    }

    command = input.shift();
}
    console.log(numArray.join(', '));

}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);