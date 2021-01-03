function solve(input){
    let validTicket = /\b(.+?[@\#$]{6}.+?[@\#$]{6}.+?)\b/g;
    let winningTicket = /([@\#$\^])\1{19}/g;

    let text = input[0];
    let line = text.split(/ +, +/g);

for (let item of line ) {

    if( item.length != 20){
        console.log(`invalid ticket`);
        continue;
    }

    let regex = /([@\#$\^])\1{5,}/g;
    let left = item.substr(0, 10);
    
    let right = item.substr(10,10);
    
    let match = regex.exec(left);
    if( match == null){
        console.log(`ticket "${item}" - no match`);
        continue;
    }    

    let lc = match[1]; 
    let lLength = match[0].length;

    regex = /([@\#$\^])\1{5,}/g;
    let matchRight = regex.exec(right);
    if( matchRight == null){
        console.log(`ticket "${item}" - no match`);
        continue;
    }
    
    let rc = matchRight[1];
    let rLength = matchRight[0].length;
    
    let length = Math.min(lLength, rLength);

    if( lc !== rc ){
        console.log(`ticket "${item}" - no match`);    
    }else{
        if( length <= 9 ){
            console.log(`ticket "${item}" - ${length}${lc}`);
        }else{      
            console.log(`ticket "${item}" - ${length}${lc} Jackpot!`);
            
        }
    }
}
    
}
//solve([ 'Cash$$$$$$Ca$$$$$$sh' ]);
solve([ '$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey' ]);
//solve([ 'validticketnomatch:(' ]);
