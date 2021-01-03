function solve(arr){

        let twoCriteriaSort = (a, b) =>
        a.length - b.length || a.localeCompare(b);
        arr.sort(twoCriteriaSort);
        
        console.log(arr.join('\n'));
        
    }

//     arr.sort(function(a, b) {
//         return a.length - b.length
//     });

//    arr.sort((a,b) => a.localeCompare(b), undefined, {sensitivity: 'accent'});

//    if( a.arr)
    
// console.log(arr);


solve([ 'alpha', 'beta', 'gamma' ]);


