function solve(input){

    let calendar = {};

    for (let line of input) {
        let [day, name] = line.split(' ');

        if ( calendar.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            calendar[day]= name;
            console.log(`Scheduled for ${day}`); 
        }
    }

    for (let day in calendar) {
        console.log(`${day} -> ${calendar[day]}`); 
    }

    //for( let [day, name] of Pbject.entries(calendar))\{
    //console.log(`${day} -> ${name}`);
    //}
}
solve(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])