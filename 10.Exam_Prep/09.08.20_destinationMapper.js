function solve(str){

let regex = /([=\/])[A-Z][A-Za-z]{2,}\1/g;

let match = str.match(regex);

let towns= [];

if(match){
    for (let town of match) {
    
        let names = town.slice(1,-1);
        towns.push(names);  
    }
}

let len = 0;
for (let town of towns) {
    
    len += town.length;
}

console.log(`Destinations: ${towns.join(', ')}`);
console.log(`Travel Points: ${len}`);

}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
//solve('ThisIs some InvalidInput');