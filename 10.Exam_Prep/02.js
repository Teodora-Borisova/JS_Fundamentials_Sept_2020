function solve(input){

let num = Number(input.shift());
let regex = /([*@])(?<tag>[A-Z][a-z]{2,})\1: (?<num1>\[[A-Za-z]\])\|(?<num2>\[[A-Za-z]\])\|(?<num3>\[[A-Za-z]\])\|$/g;

for (let line of input) {
    let match = regex.exec(line);
    let sum = '';
    
    if( match){
        sum = (match.groups.num1).charCodeAt(1) + " " + (match.groups.num2).charCodeAt(1) + " " + (match.groups.num3).charCodeAt(1);
        console.log(`${match.groups.tag}: ${sum}`);
        
    }else{
        console.log(`Valid message not found!`);
    }
}
}
solve([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
  ]);
  solve([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
  ]);