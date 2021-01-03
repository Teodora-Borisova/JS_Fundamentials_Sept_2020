function solve(arg1,arg2,arg3){

    let a = Number(arg1)
    let b = Number(arg2);
    let c = Number(arg3);

    if( a > b && a > c){
        console.log(a);
    }if ( b > a && b > c){
        console.log(b);
        
    }if( c > a && c > b){
        console.log(c);

    }

}
solve(130, 5, 99);