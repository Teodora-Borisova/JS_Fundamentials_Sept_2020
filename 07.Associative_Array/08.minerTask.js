function solve(arr){

   let obj = {};

    for (let i = 0; i < arr.length; i+= 2) {
        let resource = arr[i];
        let qty = Number(arr[i+1]);
        
        if( obj.hasOwnProperty(resource)){
            qty += obj[resource];
        }
        obj[resource] = qty;
    }

    let sorted = Object.keys(obj)
    sorted.forEach(element => {
        console.log(`${element} -> ${obj[element]}`);
        
    });
}
//solve([ 'gold', '155', 'silver', '10', 'copper', '17' ])
solve([
    'gold',   '155',
    'silver', '10',
    'copper', '17',
    'gold',   '15'
  ])


   