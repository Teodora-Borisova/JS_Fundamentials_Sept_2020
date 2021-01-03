function solve(n, precision){
  
    if( precision > 15){
        precision = 15;
    }

    n = n.toFixed(precision);
    console.log(parseFloat(n));

}
solve(10.5, 3 );