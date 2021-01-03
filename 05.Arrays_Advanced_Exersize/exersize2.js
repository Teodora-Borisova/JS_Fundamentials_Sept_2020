function solve(arr){

let list = [];
for (let i = 0; i < arr.length; i++) {
    let line = arr[i].split(' ');
    let name = line[0];
    if( line.length == 3){
        if( list.includes(name)){
            console.log(`${name} is already in the list`);
        }else {
            list.push(name);
        }  
    }else {
       if(list.includes(name)) {
           let index = list.indexOf(name);
           list.splice(index,1);
        }else{
            console.log(`${name} is not in the list`);
            
        }
    }
    
}
console.log(list.join(' '));

}
solve([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
  ]);