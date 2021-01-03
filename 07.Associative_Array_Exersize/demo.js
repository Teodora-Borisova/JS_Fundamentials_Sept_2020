function solve(arr) {

    // let leaders = { 
    //     leader: {armyName, armyCount},
    //     leader: {armyName, armyCount}
    // };
    let leaders = {};

    for (let line of arr) {
        if( line.endsWith(' arrives')){
            line = line.split(' arrives');
            let hero = line.shift();
            leaders[hero] = {};
        }else if( line.includes(':')){
            let[hero, army] = line.split(': ');
            let[armyName, armyCount] = army.split(', ');
            if( leaders.hasOwnProperty(hero)){
              leaders[hero][armyName] = Number(armyCount);
            }             
        }else if( line.includes(' + ')){
            let[armyName, armyCount] = line.split(' + ');
            for (let hero in leaders) {
                let leader = leaders[hero];

                for( let leaderArmy in leader){
                    if( armyName == leaderArmy){
                        leaders[hero][armyName] += Number(armyCount);
                    }
                }  
            }
        }else if( line.endsWith(' defeated')){
            line = line.split(' defeated');
            let hero = line.shift();
            if( leaders.hasOwnProperty(hero)){
                delete leaders[hero];
            }
        }
        
    }
    let sorted = Object.keys(leaders);
    sorted.sort((a, b) => totalArmyCount(leaders[b]) - totalArmyCount(leaders[a]));
    
    for (let hero of sorted) {
        console.log(`${hero}: ${totalArmyCount(leaders[hero])}`);

        let sortedArmy = Object.keys(leaders[hero]);
        sortedArmy.sort((a, b) => leaders[hero][b] - leaders[hero][a]);

        for (let army of sortedArmy) {
            console.log(`>>> ${army} - ${leaders[hero][army]}`);
        }
    }

    function totalArmyCount(leader){
        let count = 0;
        for (let armyName in leader) {
            count += leader[armyName];
        }
        return count;
    } 
    
}
solve([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
  ]);