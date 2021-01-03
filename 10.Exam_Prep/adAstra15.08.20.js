function solve(arr){

    let text = arr[0];
    let regex = /([#\|])(?<item>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/g;

    let match = text.match(regex);
    let totalCal = 0;
    
    if(match){
       // console.log(`Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
        
        totalCal += Number(match.groups.calories);
        console.log(totalCal);
        
    }
    let days = totalCal / 2000;
    
    console.log(`You have food to last you for: ${days} days!`);

    
}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
//solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);