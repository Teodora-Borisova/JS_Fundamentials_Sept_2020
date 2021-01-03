function solve(arr){

    let allFlights = arr.shift();
    let changedFlights = arr.shift();
    let statusCurrent = arr.shift();
    
    let obj = {};

    for (let line of allFlights) {
        let [code, city] = line.split(' ');
        obj[code] = {
        Destination: city,
        Status: 'Ready to fly'     
        }
    }
    
    for (let line of changedFlights) {
        let[code, status] = line.split(' ');
        if( obj.hasOwnProperty(code)){
            obj[code].Status = status;
        }
    }

    for (let line in obj) {
        if( obj[line].Status == statusCurrent){
            console.log(obj[line]);
        }
    }
}
solve([
    [
      'WN269 Delaware',
      'FL2269 Oregon',
      'WN498 Las vegas',
      'WN3145 Ohio',
      'WN612 Alabama',
      'WN4010 New York',
      'WN1173 California',
      'DL2120 Texas',
      'KL5744 Illinois',
      'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
      'WN612 Cancelled',
      'WN1173 Cancelled',
      'SK330 Cancelled'],

    [ 'Ready to fly' ]
  ]);