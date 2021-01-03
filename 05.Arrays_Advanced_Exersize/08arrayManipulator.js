function solve(arrOne, arrTwo){

    for (let i = 0; i < arrTwo.length; i++) {
        let element = arrTwo[i].split(' ');
        let command = element[0];
        let index = Number(element[1]);
        let num = Number(element[2]);

        if( command == 'add'){
            arrOne.splice(index, 0, num);
        } else if( command == 'addMany'){
            let index = Number(element[1]);
            let many = 0;
        
            for (let j = index; j < element.length; j++) {
                many += element[j];
                
                
            }
            let setEl = element.slice(index+1);
            arrOne.split(index, 0 , set)
            
        }
        
    }
}
// solve([ 1, 2, 4, 5, 6, 7 ],
//     [ 'add 1 8',
//      'contains 1',
//       'contains -3',
//        'print' ]);

solve([ 1, 2, 3, 4, 5 ],
    ['addMany 5 9 8 7 6 5',
    'contains 15',
    'remove 3',
    'shift 1',
    'print']);