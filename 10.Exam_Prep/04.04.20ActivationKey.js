function solve(arr){

let key = arr.shift();

let line = arr.shift();

while( line !== 'Generate'){

    if( line.includes('Contains') ){
        let [action, substring] = line.split('>>>');
        if( line.includes(substring)){
            console.log(`${key} contains ${substring}`);
        }else{
            console.log(`Substring not found!`);
        }
    }else if( line.includes('Flip')){
        let[ action, mode, start, end ] = line.split('>>>');
        let first = key.substring(0, start);
        let second = key.substring(start, end);
        let third = key.substring( end);
        if( mode == 'Upper'){
            second = second.toUpperCase();
        }else {
            second = second.toLowerCase()
        }
        let result = first + second + third;
        console.log(result);
    }else if( line.includes('Slice')){
        let[ action, start, end] = line.split('>>>');
        
        let first = key.substring(0, start);
        let second = key.substring(start, end);
        let third = key.substring(end);
        
        let result = first + third;
    }

    line = arr.shift();
}
 

}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate']);