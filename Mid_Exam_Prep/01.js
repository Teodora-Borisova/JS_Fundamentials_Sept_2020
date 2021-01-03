function solve(arr){

let neededExperience = Number(arr.shift());
let allBalltles = Number(arr.shift());
let currentExpereince = 0;
let countBattles = 0;

for (let i = 0; i < arr.length; i++) {
    let experienceBattle = Number(arr[i]);
    countBattles++;
    
    if( countBattles % 3 == 0){
        experienceBattle =  experienceBattle* 1.15;
    }

    if( countBattles % 5 == 0){
        experienceBattle = experienceBattle - (experienceBattle * 0.10);
    }

    if( countBattles % 15 == 0){
        experienceBattle = experienceBattle + (experienceBattle* 0.05); 
    }
    currentExpereince+= experienceBattle;

    if( currentExpereince >= neededExperience){
       break;
    }
}
    if(currentExpereince >= neededExperience){
        console.log(`Player successfully collected his needed experience for ${countBattles} battles.`);
    } else {
        let result = neededExperience - currentExpereince;
    console.log(`Player was not able to collect the needed experience, ${result.toFixed(2)} more needed.`);
}

}
solve([
    500,   5, 50, 100,
    200, 100, 20
  ])
// solve([
//     500,   
//     5,
//     50, 100, 200, 100, 30]);

//   solve([
//     400,   5, 50, 100,
//     200, 100, 20
//   ]
//   );