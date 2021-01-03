function solve(arr){

    let games = arr.shift().split(' ');
    let i = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i].split(' ');
        let command = currentEl[0];
        let newGame = currentEl[1];

        if( command == 'Play'){
            break;
        } else if( command == 'Install' && games.includes(newGame) == false){
               games.push(newGame);
        } else if( command == 'Uninstall' &&  games.includes(newGame) ){
            let index = games.indexOf(newGame)
            games.splice(index, 1);
        } else if( command == 'Update' && games.includes(newGame) ){
            let index = games.indexOf(newGame)
            games.splice(index, 1);
            games.push(newGame);
        } else if( command == 'Expansion'){
            let expansion = newGame.split('-');
            let game = expansion[0];
            
            if( games.includes(game)){
                let expandedGame = expansion.join(':');
                let index = games.indexOf(game);
                games.splice( index + 1,0, expandedGame);
            }
        }
    }
console.log(games.join(' '));
}
solve([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);


 
