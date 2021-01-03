function solve(nums){

    let sortedArr = [];
    nums = nums.sort((a, b) => b - a);
    let numsCopy = nums.slice(0);

    for (let i = 0; i < numsCopy.length; i++) {
        let n = numsCopy[i];

        if( i % 2 == 0){
            n = nums.shift();
        } else {
            n = nums.pop();
        }
        sortedArr.push(n);
    }

    console.log(sortedArr.join(' '));

}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);