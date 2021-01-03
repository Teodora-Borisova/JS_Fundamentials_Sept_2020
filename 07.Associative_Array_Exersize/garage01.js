function solve(arr) {

    let parking = {};

    for (let line of arr) {
        let [garage, info] = line.split(' - ');
        let items = info.split(', ');

        let car = {};
        for (let item of items) {
            let [key, value] = item.split(': ');            
            car[key] = value;
        }

        if (!parking.hasOwnProperty(garage)) {
            parking[garage] = [];
        }
        parking[garage].push(car);

    }
    let garages = Object.entries(parking);
    
     for ( let [garage, cars] of garages) {
        console.log(`Garage № ${garage}`);

        for (let car of cars) {
            let items = [];

            let vehicle = Object.entries(car);
            
            for (let [prop, value] of vehicle) {
                items.push(prop + ' - ' + value);
            }
            console.log('--- ' + items.join(", "));
        }
     }
}
solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);