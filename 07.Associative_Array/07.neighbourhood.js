function solve(input) {

    let hood = {};
    let neighbourhoods = input.shift().split(', ');

    for (let line of neighbourhoods) {
        hood[line] = [];
    }

    for (let line of input) {
        let [place, name] = line.split(' - ');

        if (!hood.hasOwnProperty(place)) {
            continue;
        }
        hood[place].push(name);
    }

    let sorted = Object.keys(hood);    
    sorted.sort((a, b) => a.length - b.length)
        .forEach(el => {
            console.log(`${el}: ${hood[el].length}\n--${hood[el]}`);
        });
}
solve([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);