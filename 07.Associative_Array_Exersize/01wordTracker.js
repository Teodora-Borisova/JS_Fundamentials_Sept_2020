function solve(arr){

let words = arr.shift().split(' ');//string

let wordsObj = {};

for (let word of words) {
    wordsObj[word] = 0;
}

for (let word of arr) {
    if( wordsObj.hasOwnProperty(word)){
        wordsObj[word] ++;
    }
}

Object.keys(wordsObj)
.sort((a, b) => wordsObj[b] - wordsObj[a]) //['this', 'sentence']
.forEach( el => {
    console.log(`${el} - ${wordsObj[el]}`);
});

}
solve(['this sentence',
'In','this','sentence','you','have','to','count',
'the','occurances','of','the','words',
'this','and','sentence','because','this',
'is','your','task'])