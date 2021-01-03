function solve(fights, helmet, sword, shield, armor) {

    let expenses = 0;
    let brokenShield = 0;

    for (let i = 1; i <= fights; i++) {
        if (i % 2 == 0) {
            expenses += helmet;
        }
        if (i % 3 == 0) {
            expenses += sword;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            expenses += shield;
            brokenShield++;
            if (brokenShield == 2) {
                expenses += armor;
                brokenShield = 0;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(7, 2, 3, 4, 5)