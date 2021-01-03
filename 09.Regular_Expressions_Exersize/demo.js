function solve(arr) {
    let income = 0;

    for (let line of arr) {
        let regex = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>[A-Za-z]+)>([^\|\$%\.]+)?\|(?<count>[0-9]+)\|([^\|\$%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
        let match = regex.exec(line);
        
        if(match){
            let totalPrice = Number(match.groups.count) * Number(match.groups.price)
            income += totalPrice;
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);   
        }
    }   
    console.log(`Total income: ${income.toFixed(2)}`);
} 
solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]
  )
  // solve([
//     '%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift'
//   ]);