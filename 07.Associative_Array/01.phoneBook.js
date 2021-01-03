function solve(input){

let phoneBook = {};

for( let line of input){
    let tokens = line.split(' ');  // destructuring let [name, phone] = line.split(' ');
    let name = tokens[0];
    let phone = tokens[1];  

    phoneBook[name] = phone;
}

for (let name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
}

// Object.keys(phoneBook).forEach(element => {
//         console.log(`${element} -> ${phoneBook[element]}`)
// });

}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);