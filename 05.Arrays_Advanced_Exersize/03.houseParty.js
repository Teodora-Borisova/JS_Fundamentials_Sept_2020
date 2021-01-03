function solve(arr){

    let guests = [];

    for (let i = 0; i < arr.length; i++) {
         
        let command = arr[i].split(' ');
        let name = command[0];
        let action = command[2];

        if( action !== 'not'){
                if( guests.includes(name) === true){
                    console.log(`${name} is already in the list!`);
                    continue;
                }
                guests.push(name);
        } else {
            if( guests.includes(name) === false){
                console.log(`${name} is not in the list!`);
            continue;                
            }
        guests = guests.filter(x => x != name);
        }
    }
    console.log(guests.join('\n'));
}

solve([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
  ]);