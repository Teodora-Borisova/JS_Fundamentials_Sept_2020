function solve(arrOne, arrTwo){

  let deleteNum = arrTwo.shift();
  let deleteTwo = arrTwo.shift();  
  let n = arrTwo.shift();

  let modified = arrOne.splice(0,deleteNum);
  let result = modified.splice(0,deleteTwo);

  let counter = 0;  
  for (let el of modified) {
    if(el == n ){
        counter++;
    }
  }
     
  console.log(`Number ${n} occurs ${counter} times`);  
}
solve([5,2,3,4,1,6], [5,2,3])