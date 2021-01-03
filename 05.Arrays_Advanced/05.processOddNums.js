function oddNums(inputArr){

    let filtered = inputArr.filter(isOddIndex)
    
    let doubled = filtered.map( x => x * 2);

    console.log(doubled.reverse());
    
    

    function isOddIndex(value, index){
        return ( index % 2 ) == 1;
    }


}
oddNums([10, 15, 20, 25]);
oddNums([3, 0, 10, 4, 7, 3]);