function solve(input) {

    let str = input.shift();

    for (let line of input) {
        let [command, a, b] = line.split(' ');
        let result = '';
        if (command == 'TakeOdd') {
            
            for (let i = 1; i < str.length; i += 2) {
                let char = str[i];
                result += char;
            }
            str = result;
            console.log(str);
        }else if( command == 'Cut'){
            let first = str.substring(0, a);
            let second = str.substring(a, b);
            let third = str.substring((a+b));
            let result = first + third;
          
        }
    }
}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'])