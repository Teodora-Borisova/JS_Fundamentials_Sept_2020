function solve(input){

let users = {};
let capacity = Number(input.shift());

for (let line of input) {
    let parts = line.split('=');
    let command = parts.shift();
    if( command == 'Add' ){
        let[username, sent, received] = parts;
        if( !users.hasOwnProperty(username)){
            users[username] = [sent, received];
        }
    }else if( command == 'Message'){
        let[ sender, receiver] = parts;
        if( users.hasOwnProperty(sender) && users.hasOwnProperty(receiver) ){
            users[sender][0]++;
            users[receiver][1]++;
            if( users[sender][0] >= capacity ){
                console.log(`${sender} reached the capacity!`);
                delete users[sender];
            }
            if( users[receiver][1] >= capacity ){
                console.log(`${receiver} reached the capacity!`);
                delete users[receiver];
            }
        }
    }else if( command == 'Empty'){
        let [username] = parts;
        if( username == 'All'){
            users = {};
        }else {
            if( users.hasOwnProperty(username)){
                delete users[username];
            }
        }
    }else if (command == 'Statistics'){
        
        
        let keys = Object.keys(users);

        console.log(`Users count: ${keys.length}`);
        let sorted = keys.sort( (a, b) => a. localeCompare(b));
        for (let key of keys) {
            let total = Number(users[key][0]) + Number(users[key][1]);
            console.log(`${key} - ${total}`);
            
        }
    }
    
}

}
solve([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
  ]);