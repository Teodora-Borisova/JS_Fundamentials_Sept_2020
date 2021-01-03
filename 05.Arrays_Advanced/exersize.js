function firstLast(n, k){

    let result = [1];
     for (let i = 1; i < n; i++) {
        
        lastK = result.slice(-k);
        let sum = 0;

        for (let el of lastK) {
            sum += el;
        }

        arr.push(sum)
     }

     console.log();
     


}
firstLast(6, 3);

