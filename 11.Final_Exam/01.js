function solve(input) {

  let str = input.shift();

  for (let line of input) {

    if( line == "Finish"){
      break;
    }

    let [command, a, b] = line.split(' ');

    if (command == 'Replace') {
      if (str.includes(a)) {
        let i = str.indexOf(a);
        while (i != -1) {
          str = str.substring(0, i) + b + str.substring(i + 1);
          i = str.indexOf(a);
        }
        console.log(str);
      }
    }else if (command == 'Cut') {
      a = Number(a);
      b = Number(b);
      if (a != -1 && b<= str.length) {
      str = str.substring(0, a) + str.substring(b+1);
        console.log(str);
      } else {
        console.log(`Invalid indices!`);
      }
    }else if (command == 'Make') {
      if (a == 'Upper') {
        str = str.toUpperCase();
        console.log(str);
      } else if ( a == "Lower") {
        str = str.toLowerCase();
        console.log(str);
        
      }
    }else if (command == 'Check') {
      if (str.includes(a)) {
        console.log(`Message contains ${a}`);
      } else {
        console.log(`Message doesn't contain ${a}`);
      }
    }else if (command == 'Sum') {
      a = Number(a);
      b = Number(b);
      if (a > 0 && b > 0) {
        let chars = str.slice(a, b+1);
        let sum = 0;
        for (char of chars) {
          sum += char.charCodeAt(0);
        }
        console.log(sum);
      } else if ( a < 0 || b < 0){
        console.log(`Invalid indices!`);
        break;
      }
    }
    
  }
}

// solve([
//   'ILikeSharan',
//   'Replace a e',
//   'Make Upper',
//   'Check SHEREN',
//   'Sum 1 4',
//   'Cut 1 4',
//   'Finish'
// ]);
solve([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'
  ])