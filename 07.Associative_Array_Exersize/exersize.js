function solve(arr) {

let obj = {};
// // obj = {garages 1 - car{}
//           garages 1 - car{}
//           2 = { car} }

for (let line of arr) {
    let[garages, info] = line.split(' - ');
    let items = info.split(', ');

    let car = {};

    for (let item of items) {
        let [key, value] = item.split(': ');
        car[key] = value;
    }

    if( !obj.hasOwnProperty(garages)){
        obj[garages] = [];
    }

    obj[garages].push(car);
    console.log(obj);    
}

let keys = Object.keys(obj);



}
solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);