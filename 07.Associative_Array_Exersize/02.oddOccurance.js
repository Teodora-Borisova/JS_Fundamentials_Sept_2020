function solve(str){

let arr = str.split(' ');

let occurances = new Map();

for (let word of arr) {
    word = word.toLowerCase();
    if( !occurances.has(word)){
        occurances.set(word, 0);
    }
    let newVal = occurances.get(word) + 1;
    occurances.set(word, newVal);
}
    let keys = Array.from( occurances.keys())
    .filter(x => occurances.get(x) % 2 !== 0)
    .join(' ');
    
console.log(keys);

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');