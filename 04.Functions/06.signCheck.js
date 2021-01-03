function signCheck(a, b, c){
    let isPositive = true;

    if ( a > 0 && b > 0 && c > 0){
        isPositive = true;
    } else if ( a < 0 && b < 0 && c > 0 ){
       isPositive = true;
    } else if ( a < 0 && b > 0 && c > 0 ){
        isPositive = false;
    } else if ( a < 0 && b < 0 && c < 0){
        isPositive = false;
    } else if ( a > 0 && b < 0 && c > 0){
        isPositive = false
    } else if ( a > 0 && b > 0 && c < 0){
        isPositive = false
    } 
    
    if( isPositive = true){
        console.log("Positive");
    }else{
        console.log("Negative");
    }

}
signCheck(5, 12, -15);