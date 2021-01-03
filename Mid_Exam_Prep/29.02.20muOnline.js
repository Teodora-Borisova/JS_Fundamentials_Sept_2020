function solve(input) {

    let initialHealth = 100;
    let bitcoins = 0;
    let array = input.split('|');

    for (let i = 0; i < array.length; i++) {
        let room = array[i].split(' ');
        
        let command = room[0];
        let value = Number(room[1]);

        if( command == 'potion'){
            let addHealth = Number(room[1]);
            let tempHealth = 0;
            if( (initialHealth + addHealth) <= initialHealth){
                initialHealth += addHealth;
                console.log(`You healed for ${addHealth} hp.`);
                tempHealth = initialHealth;
                console.log(`Current health: ${tempHealth} hp`);
            }else if( (tempHealth + addHealth ) > initialHealth ) {
                tempHealth = 100;
            }
        } else if( command == 'chest'){
            console.log(`You found ${value} bitcoins.`); 
        } else {
            let attack = Number(room[1]);
            initialHealth -= attack; // 1

        }  
    }

    
    if( tempHealth > 0){
        console.log(`You slayed ${command}.`);
    }else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${room}`);
    }

    console.log(`You've made it!", "Bitcoins: ${bitcoins}", "Health: ${initialHealth}`);
    
}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");