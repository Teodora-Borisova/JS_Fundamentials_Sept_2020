function loadingBar(n) {

    let indicator = n / 10;
    let loader = '..........';
    let percentArr = loader.split('');
    if (n == 100) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    } else {
        for (let i = 0; i < indicator; i++) {
            percentArr.pop();
            percentArr.unshift('%');
        }
        console.log(`${n}% [${percentArr.join('')}]`);
        console.log(`Still loading...`);  
    }
}
loadingBar(100);