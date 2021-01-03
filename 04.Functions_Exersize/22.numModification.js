function solve( num ){
 
    num = num.toString().split('').map(Number);
    let sum = 0;
    
    for (let digit of num) {
        sum += digit;
    }
    
        for (let i = 0; i < num.length; i++) {
        
            let average = sum/num.length;
            if( average < 5){
                num.push(9);
            }
            sum += num[num.length - 1];
        }
        console.log(num.join(''));
    }
    
    solve(101);
    solve(5835);
    