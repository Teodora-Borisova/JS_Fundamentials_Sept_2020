function solve(arr){

    let employees = [];

    class Person {
        constructor (name){
            this.name = name;
            this.number = name.length;
        }

        print() {
            return `Name: ${this.name} -- Personal Number ${this.number}`
        }
    }

    arr = arr.map ( x => {
        return new Person (x);
    })
    console.log(arr);
}
// let employees = {};

// for (const line of arr) {
//     employees[line] = line.length;
// }

// Object.entries(employees).forEach(element => {
//     console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`);

// });
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);