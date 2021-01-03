function solve(arr){

let wagons = arr.shift().split(' ').map(Number);
let maxCapacity = Number(arr.shift());

for (let i = 0; i < arr.length; i++) {
    let line = arr[i].split(' ');
    let command = line[0];
    let num = Number(line[1]);
    
    if( command == 'Add'){
        wagons.push(num);
    } else {
        command = Number(arr[i]);
        for (let j = 0; j < wagons.length; i++) {
            if( wagons[j] + command <= maxCapacity){
            wagons[j] += command;
            break;
            }
        }
    } 
}
console.log(wagons.join(' '));

}
// solve([ '32 54 21 12 4 0 23','75',
// 'Add 10', 'Add 0', '30', '10', '75' ]);

solve([ '0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6' ])