function solve(arr){

let sequence = arr.shift();

for (let i = 0; i < arr.length; i++) {
    let line = arr[i].split(' ');
    let command = line[0];
    let value = Number(line[1]);

    if( command == 'Add'){
        sequence.push(value);
    }else if( command == 'Remove'){
        let index = sequence.indexOf(value);
        sequence.splice(index, 1);
    }else if( command == 'Replace'){
        let replacement = Number(line[2]);
        let index = sequence.indexOf(value);
        sequence.splice(index, 1, replacement);
    }else if( command == 'Collapse'){
        sequence = sequence.filter( x => x >= value );
    } else if(command == 'Mort'){
        break;
    }
}
{
    console.log(sequence.join(' '));
}

}
// solve([
//     [1,  4,  5, 19, 13, 42, 69, 24],
//     'Add 1',
//     'Remove 4',
//     'Replace 1 26',
//     'Mort'])

  solve([ [
    1, 2, -1, 0, -3,
    9, 8,  7, 2],
    'Collapse 8', 'Mort' ]);