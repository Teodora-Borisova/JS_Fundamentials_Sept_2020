function solve(arr){

const colors = {
    'S': 4,
    'H': 3,
    'D': 2,
    'C': 1
}

const cards = {
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
}

let players = {};
   
    for ( let line of arr ){
        let [name, hand] = line.split(': ');//'Pesho: 2C, 4H, 9H, AS, QS',
        hand = hand.split(', ');  //array

        if( !players.hasOwnProperty(name)){
            players[name] = []; //{ 'Pesho': [] }
        }
        players[name].push(...hand);
    } 

    Object.keys(players).forEach(key => {
        let cardsArr = new Set(players[key]);
        let total = 0;
        Array.from(cardsArr).forEach(card => { //10D, 7H
            let elements = card.split('');
            let color = elements.pop();
            let cardNum = elements.join('');
            if( isNaN(cardNum)){
                cardNum = cards[cardNum];
            }
            
            total += colors[color] * Number(cardNum);
        });
        console.log(`${key}: ${total}`)
    });
}
solve([
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD'
  ]);