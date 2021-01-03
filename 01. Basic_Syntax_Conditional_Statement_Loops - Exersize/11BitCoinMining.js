function solve(input){

    let gramsPerDay = 0;
    let totalGrams = 0;
    let bitcoinsNum = 0;
    let levaEarned = 0;
    let levaLeft = 0;
    let countBitcoins = 0;
    let bitcoinCount = 0;
    let currrentBitcoin = 0;
    let dayBitcoinBought = 0;
    count = 0;


for (let i = 0; i < input.length; i++) {
    count ++;

    if( count % 3 == 0){
        gramsPerDay = input[i] * 0.70; 
    }else{
        gramsPerDay = input[i];
    }

    totalGrams += gramsPerDay;
    levaEarned = totalGrams * 67.51;

    if ( levaEarned >= 11949.16){
        currrentBitcoin =  Math.floor(levaEarned / 11494.16);
        countBitcoins += currrentBitcoin;
        bitcoinCount ++;


        totalGrams -= currrentBitcoin * 11494 / 67.51;
        levaLeft = totalGrams * 67.51;
        
        if( bitcoinCount == 1){
            dayBitcoinBought = count;
        }
    }
}

console.log(`Bought bitcoins: ${countBitcoins}`);
if ( bitcoinCount > 0){
    console.log(`Day of the first purchased bitcoin: ${dayBitcoinBought}`);
}

console.log(`Left money: ${levaLeft.toFixed(2)} lv.`);


}
solve([100,200,300]);

// Write a JavaScript program that calculates the total amount of bitcoins
//  you purchased with the gold you mined during your shift at the mine.
//   Your shift consists of a certain number of days where you mine 
//   an amount of gold in grams. Your program will receive an array 
//   with the amount of gold you mined each day, where the first day 
//   of your shift is the first index of the array. Also, someone 
//   was stealing every third day from the start of your shift 30% from
//    the mined gold for this day. For the different exchanges use 
//    these prices: 
//    1 Bitcoin 11949.16 lv. 
//    1 g of gold 67.51 lv. 
//    Print on the console these lines in the following formats: 
//  First line prints the total amount of bought bitcoins: 
//  "Bought bitcoins: {count}"  Second line prints which day you bought your first bitcoin:  
//  "Day of the first purchased bitcoin: {day}" In case you did not purchased any bitcoins, do not print the second line.  Third line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit after the decimal point: 
//  "Left money: {money} lv." 