function listProducts(arr){

let result = arr.sort((a, b) => a.localeCompare(b));

for (let i = 0; i < result.length; i++) {
    console.log(`${i + 1}.${result[i]}`);
    
}

}
listProducts(['Potatoes','Tomatoes','Onions','Apples']);