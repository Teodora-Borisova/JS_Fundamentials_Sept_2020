function solve(n){

    
    n = Number(n);
  //  let letter = String.fromCharCode();
   
    for( let a = 0; a <= n; a++ ){
        for( let b = 0; b <= n; b++){
            for( let c = 0; c <=n; c++){  
                let l1 = String.fromCharCode(97 + a);
                let l2 = String.fromCharCode(97 + b);
                let l3 = String.fromCharCode(97 + c);
                console.log( l1 + l2 + l3);
                
            }
        }
    }
    

}

solve(3);