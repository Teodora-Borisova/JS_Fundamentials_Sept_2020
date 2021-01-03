function solve(arr){

let inventary = arr.shift().split(' ');
let command = arr.shift();

while ( command !== 'Craft!'){
    
    let action = command[0];
    let item = command[1];
    let newItem = command[2];

    if( action == 'Collect'){
        if( inventary.includes(item) == false){
            inventary.push(item)
        }
    }
    if( action == 'Drop'){
        if( inventary.includes(item) == true){
            inventary.splice( item, 1);
        }
    }
    if( action == 'Combine'){

    }
    command = arr.shift();

}

}
solve([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ])