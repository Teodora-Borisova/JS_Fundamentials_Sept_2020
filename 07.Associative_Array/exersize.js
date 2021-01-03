function solve(arr) {
   
    let obj = {};
    let hoods = arr.shift(', ').split(', ');

    for (let hood of hoods) {
        obj[hood] = [];

        for (let line of arr) {
            let[streetName, person] = line.split(' - ');
            
            if( obj.hasOwnProperty(streetName)){
                obj[hood] = person;
            }
        
        }
    }
    
    console.log(obj);
}
solve([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
  ]);