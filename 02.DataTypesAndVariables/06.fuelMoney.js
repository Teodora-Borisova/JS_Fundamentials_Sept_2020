function solve(distance, passangers, priceLiter){

// 1l = 1000ml
let money = 0;

let neededFuel = (distance / 100) * 7;
neededFuel +=  (passangers * 0.100);
money = neededFuel * priceLiter;

console.log(`Needed money for that trip is ${money}lv.`);

}
solve(260, 9, 2.49);