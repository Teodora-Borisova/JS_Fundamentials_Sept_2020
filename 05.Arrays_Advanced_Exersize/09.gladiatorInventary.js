function solve(arr){

let inventary = arr.shift().split(' ');
for (let i = 0; i < arr.length; i++) {
    let line = arr[i].split(' ');
    let command = line[0];
    let product = line[1];
    
    if( command == 'Buy'){
        if( inventary.includes(product) == false){
            inventary.push(product);
        }
    }else if( command == 'Trash'){
        if( inventary.includes(product) == true){
           index =  inventary.indexOf(product);
           inventary.splice(index,1);
        }
    }else if( command == 'Repair'){
        if( inventary.includes(product) == true){
            index = inventary.indexOf(product);
            inventary.splice(index,1);
            inventary.push(product);
        }
    }else if( command == 'Upgrade'){
        let upgrade = product.split('-');
        let game = upgrade[0]

        if( inventary.includes(game) == true){
        index = inventary.indexOf(game);
        let extendedGame = upgrade.join(':')
        inventary.splice(index + 1, 0, extendedGame)
        }else{
            break;
        }
    }
}
console.log(inventary.join(' '));

}
solve([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
  ]);

  solve([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);