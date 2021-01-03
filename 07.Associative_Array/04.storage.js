function solve(input){

let storage = new Map();

for (let line of input) {
    
    let [product, qty] = line.split(' ');
    qty = Number(qty);

    if( storage.has(product)){
        let existing = storage.get(product);
        storage.set(product, existing + qty)
    }else {
        storage.set(product, qty);
    }
    console.log(storage);
    
    //or
    // //if( storage.has(product)){
    //     qty+= storage.get(product);
    // }
    // storage.set(product, qty);
}

for( let[product, qty] of storage){
    console.log(`${product} -> ${qty}`);
}
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);

// With Object//
// let obj = {};

// for (let line of input) {
//     let[ product, num] = line.split(' ');
//     num = Number(num);
    
//     if( !obj.hasOwnProperty(product)){
//         obj[product] = 0;
//     }
//     obj[product] += num;
// }

// for (let key in obj) {
//     console.log(`${key} -> ${obj[key]}`);
// }