function solve(arr){

    let newArr = [];
    let element = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        element += 1;
        if( arr[i] == 'add'){
            newArr.push(`${element}`);
        } else {
            if( newArr.length > 0){
                newArr.pop();
            }
        }
    }

    if( newArr.length == 0 ){
        console.log('Empty');
    }else {
        console.log(newArr.join(' '));
    }

}
//solve(['add', 'add', 'add', 'add']);
//solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove','remove','remove']);