function solve(arr){


    let students = Number(arr.shift());
    let lectures = Number(arr.shift());
    let additionalBonus = Number(arr.shift());
    let attendances = arr.map(Number);
    let maxBonus = Number.MIN_SAFE_INTEGER;
    let maxAtttendances = Number.MIN_SAFE_INTEGER
    
 

   for (let i = 0; i < attendances.length; i++) {
       let each = attendances[i];

      let totalBonus = (each / lectures) * ( 5 + additionalBonus);

      if ( totalBonus >= maxBonus){
          maxBonus = totalBonus;
      }

      if ( each >= maxAtttendances){
          maxAtttendances = each;
      }
       
   }
   

   //{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus}

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
console.log(`The student has attended ${maxAtttendances} lectures.`);
   
}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20']);