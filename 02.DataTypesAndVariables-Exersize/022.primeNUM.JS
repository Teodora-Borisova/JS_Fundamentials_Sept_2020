function solve(n){

n = Number(n);

if ( n % n == 0 && n % 1 == 0 && n % 2 !== 0 ){
    console.log(true);
}else {
    console.log(false);
}


}
solve(71);