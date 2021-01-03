function solve(arr){

    let obj = {};
    for (let line of arr) {
        let[coutry, town, price] = line.split(' > ');
        price = Number(price);

        if( !obj.hasOwnProperty(coutry)){
            obj[coutry] = {};
        }

        if( obj[coutry].hasOwnProperty(town)){
            if(obj[coutry][town] > price){
                obj[coutry][town] = price;
            }
        }else{
            obj[coutry][town] = price;
        }
    }

    let entries = Object.entries(obj).sort( (a, b) => a[0].localeCompare(b[0]));
    
    for (let [coutry, towns] of entries) {
        let result = [];
        
        let townsSorted = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        for (let [key, value] of townsSorted) {
            result.push(key + ' -> ' + value);
        }
        console.log(coutry + ' -> ' + result.join(' '));
    }
}
solve([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
  ]);

//   solve([
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Aarna > 25010',
//     'Bulgaria > Lukovit > 10'
//   ]);