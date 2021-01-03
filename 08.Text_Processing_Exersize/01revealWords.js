function solve(words, str){

    words = words.split(', ');
    
    for (let word of words) {
        let starsString = '*'.repeat(word.length);
        str = str.replace(starsString, word);
    }
    console.log(str);
    
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages');
