function solve(arr){

    let obj = {};

    for (let line of arr) {
        let [company, id] = line.split(' -> ');
        
        if( !obj.hasOwnProperty(company) ){
            obj[company] = [];
        }

        let exsiting = obj[company];
        exsiting.push(id);     
    }
   
let sorted = Object.entries(obj);
sorted.sort((a,b) => a[0].localeCompare(b[0]))

for( let line of sorted){
    console.log(`${line[0]}`);
    let set = new Set(line[1]);
    for( let number of set){
        console.log(`-- ${number}`);
    }
}

}
// solve([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
//   ]);

  solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
  ]);

  let obj = {};

  for (let line of arr) {
      let [company, id] = line.split(' -> ');

      if (!obj.hasOwnProperty(company)) {
          obj[company] = [];
      }
      obj[company].push(id);
  }

  Object.keys(obj)
  .sort((a, b) => a.localeCompare(b))
  .forEach( el => console.log(`${el} \n-- ${obj[el]}`));
