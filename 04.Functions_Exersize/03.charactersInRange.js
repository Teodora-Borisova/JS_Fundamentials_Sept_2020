function charsRange(a, b){

let firstCode = a.charCodeAt(0);
let secondCode = b.charCodeAt(0);

let start = Math.min(firstCode, secondCode);
let end = Math.max(firstCode, secondCode);
//let start = firstCode < secondCode ? firstCode : secondCode;
//let end = firstCode > secondCode ? firstCode : secondCode;

let line = '';
for (let i = start + 1; i < end; i++) {
    line += String.fromCharCode(i) + ' ';
    
}

return line;

}
//console.log(charsRange('a', 'd'));
console.log(charsRange('#', ':'));