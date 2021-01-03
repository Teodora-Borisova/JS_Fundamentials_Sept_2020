function solve(arr){
    let chat = [];

for (let i = 0; i < arr.length; i++) {
    let line = arr[i].split(' ');
    let command = line[0];
    let message = line[1];
    
    if( command == 'Chat'){
        chat.push(message);
    }else if( command == 'Delete'){
        if( chat.includes(message) == true){
            let index = chat.indexOf(message);
            chat.splice(index,1);
        }
    }else if( command == 'Edit'){
        let edit = line[2];
        let index = chat.indexOf(message);
        chat.splice(index,1,edit);
    } else if( command == 'Pin'){
        if( chat.includes(message) == true){
            let index = chat.indexOf(message);
            let temp = message;
            chat.splice( index,1);
            chat.push(temp);
        }
    }else if( command == 'Spam'){
        let index = line.shift();
        for (let value of line) {
            chat.push(value)
            
        }
    }else if( command == 'end'){
        break;
    }
}
console.log(chat.join('\n'));
}
// solve([
//     'Chat Hello',
//     'Chat darling',
//     'Edit darling Darling',
//     'Spam how are you',
//     'Delete Darling',
//     'end'
//   ]);

  solve([
    'Chat John',
    "Spam Let's go to the zoo",
    'Edit zoo cinema',
    'Chat tonight',
    'Pin John',
    'end'
  ])