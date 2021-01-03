function solve(arr) {

    let command = arr.shift();

    while (command !== 'Go Shopping') {
        let list = arr.shift().split('!');
        
        let tokens = command.split(' ');;
        let index1 = tokens[1];
        let index2 = tokens[2];

        switch (tokens[0]) {

            case 'Urgent': {
                if (list.includes(index1) == false) {
                    list.unshift(index1);
                }
                break;
            }
            case 'Unnecessary':{ 
                if (list.includes(index1) == true) {
                    list.splice(index1);
                }
                break;
            }

            case 'Correct ': {
                if (list.includes(index1) == true) {
                    index1 = index2;
                }
                break;
            }

            case 'Rearrange ': {
                if (list.includes(index1) == true) {
                    list.splice(index1);
                    list.push(index1);
                }
                break;
            }
        }

        command = arr.shift();
    }
    console.log(list);
    
}
    solve([
            'Milk!Pepper!Salt!Water!Banana',
            'Urgent Salt',
            'Unnecessary Grapes ',
            'Correct Pepper Onion',
            'Rearrange Grapes',
            'Correct Tomatoes Potatoes',
            'Go Shopping!'
          ]);

// solve(['Tomatoes!Potatoes!Bread',
//     'Unnecessary Milk',
//     'Urgent Tomatoes',
//     'Go Shopping!']);