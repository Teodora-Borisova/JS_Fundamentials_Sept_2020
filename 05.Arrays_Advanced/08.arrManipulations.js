function arrManipulations(arr){
  
    let nums = arr.shift().split(' ').map(Number);
    
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(' ');
        let command = line[0];
        let num = Number(line[1]);
        let index = Number(line[2]);

        if( command == 'Add'){
            nums.push(num);
        } else if( command == 'Remove'){
            let index = nums.indexOf(num);
            nums.splice(index, 1);
        } else if (command == 'RemoveAt'){
            nums.splice(num,1);
        }else if( command == 'Insert'){
            nums.splice(index, 0, 8);
        }
    }    
console.log(nums.join(' '));

}
arrManipulations(['4 19 2 53 6 43',
'Add 3','Remove 2','RemoveAt 1','Insert 8 3']);