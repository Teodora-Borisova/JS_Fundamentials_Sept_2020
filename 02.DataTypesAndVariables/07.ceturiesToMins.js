function solve(century){

    //century - years - days - hours - minutes
let years = century * 100;
let days = Math.trunc(years * 365.2422);
let hours = (days * 24);
let minutes = (hours * 60);

console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
solve(5);