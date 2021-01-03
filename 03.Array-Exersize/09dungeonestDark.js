function solve(arr){

let health = 100;
let coins = 0;
let allCoins = 0;
let array = arr[0].split('|');

let currentRoom = 0;

for (let i = 0; i < array.length; i++) {
    let room = array[i].split(' ');
    let command = room[0];
    let num = Number(room[1]);
    currentRoom ++;
    
    if( command == 'potion'){
        if( health + num > 100){
            num = 100 - health;
        }else {
            health += num;
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
    } else if ( command == 'chest'){
        coins = Number(num);
        allCoins += Number(num);
        console.log(`You found ${coins} coins.`);
    } else {
        health -= Number(num);
        if( health > 0){
            console.log(`You slayed ${command}.`);
        } else {
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${currentRoom}`);
            return;
        }
    }
}

    console.log(`You have made it!`);
    console.log(`Coins: ${allCoins}`);
    console.log(`Health: ${health}`);
}
solve([ 'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000' ])