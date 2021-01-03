function solve(input) {

    let obj = {};

    for (let word of input) {

        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0;
        }

        obj[word] += 1;
    }

    Object.keys(obj)
        .sort((a, b) => b[1] - a[1])
        .forEach(el => {
            console.log(`${el} -> ${obj[el]} times`);
        });
}
solve([
    'Here', 'is',
    'the', 'first',
    'sentence', 'Here',
    'is', 'another',
    'sentence', 'And',
    'finally', 'the',
    'third', 'sentence'
]);