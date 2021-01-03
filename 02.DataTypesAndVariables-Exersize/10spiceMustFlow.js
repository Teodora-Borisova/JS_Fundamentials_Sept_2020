function solve(arg){

let yield = Number(arg);
let totalMined = 0;
let daysInMining = 0;

while ( yield >= 100){
    totalMined+= yield - 26;
    daysInMining++;
    yield -= 10;
}

totalMined -= 26;
console.log(daysInMining);
console.log(totalMined);

}
solve(111);