function solve(arr){

    let n = arr.pop();
    n = Number(n);
    

    if(Number.isNaN(n)){
        console.log('Empty');
        return;
    }

    for( let i = 0; i < n; i++){
       const element = arr.pop();
       arr.unshift(element);
    }


console.log(arr.join(' '));
}
//solve(['1', '2', '3', '4','2']);
//solve(['Banana', 'Orange', 'Coconut', 'Apple','15']);
solve(['remove', 'remove', 'remove']);