function solve(input) {

    let regex = /(@#+)[A-Z][A-Za-z0-9]{4,}[A-Z](@#+)/g;
    let countCodes = input.shift();

    for (let item of input) {
        let match = item.match(regex);
        
        if (match) {
            let code = match.join('');

            let newReg = /[0-9]/g;
            let m1= item.match(newReg);
            if( m1){
                console.log(`Product group: ${m1.join('')}`);
            }else {
                console.log(`Product group: 00`);
            }
            
        } else {
            console.log(`Invalid barcode`);
        }
    }

}
solve([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ]);
solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);