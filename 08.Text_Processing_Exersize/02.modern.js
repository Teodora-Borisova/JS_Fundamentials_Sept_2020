function solve(str){
    
    let arr = str.split(' ');
    arr.forEach(word => {
        if( word[0] == '#' && word.length > 1 ){
            let isLetters = true;
            word = word.slice(1);
            for ( let char of word) {
                let code = char.charCodeAt();
                if( code < 65 || code > 90 && code < 97 || code > 122){
                    isLetters = false;
                    break;
                }
            }
            if( isLetters){
                console.log(word);
            }
        }
    });
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');