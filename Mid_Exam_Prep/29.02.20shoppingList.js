function solve(arr){

let list = arr.shift().split('!');

let command = arr.shift().split(' ');

while( command != 'Go Shopping!'){
    let token = command[0];
    let product = command[1];
    let newProduct = command[2];

    if( token == 'Urgent'){
        if( list.includes(product) == false){
            list.unshift(product)
        }
    }

    if( token == 'Unnecessary'){
        if( list.includes( product) == true){
            list.splice(command[1]);
        }
    }

    if( token == 'Correct'){
        if( list.includes( product) == true){
            product = newProduct;
        }
    }

    if( token == 'Rearrange'){
        if( list.includes(product) == true){
            list.splice(command[1],1);
            list.push(command[2]);
        }
    }

    if( token == 'Constrains'){
        list = list.filter( )
    }
    command = arr.shift().split(' ');

}
   console.log(list);
}

//   solve([
//     'Milk!Pepper!Salt!Water!Banana',
//     'Urgent Salt',
//     'Unnecessary Grapes ',
//     'Correct Pepper Onion',
//     'Rearrange Grapes',
//     'Correct Tomatoes Potatoes',
//     'Go Shopping!'
//   ]);

  solve([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!']);