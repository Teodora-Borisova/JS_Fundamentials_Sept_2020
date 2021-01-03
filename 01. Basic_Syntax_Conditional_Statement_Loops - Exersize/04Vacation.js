function solve(num, type, weekDay) {
    num = Number(num);
    let price = 0;
    let totalPrice = 0;
    
    if( type === "Students"){
        if ( weekDay === "Firday"){
            price = 8.45;
        }else if( weekDay === "Saturday" ){
            price = 9.80;
        }else if ( weekDay === "Sunday" ){
            price = 10.46;
        }
        if( num >= 30){
            price *= 0.85;
        }
    } else if ( type === "Business"){
        if ( weekDay === "Firday"){
            price = 10.90;
        }else if( weekDay === "Saturday" ){
            price = 15.60;
        }else if ( weekDay === "Sunday" ){
            price = 16;
        } 
        if( num >= 100){
            price = num - 10;
        }
    } else if ( type === "Regular"){
        if ( weekDay === "Friday"){
            price = 15;
        }else if( weekDay === "Saturday" ){
            price =  20;
        }else if ( weekDay === "Sunday" ){
            price = 22.50;
        }  
        if ( num >= 10 && num <= 20){
            price *= 0.95; 
        }
    }

    totalPrice = num * price;

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(40, "Regular", "Saturday");
