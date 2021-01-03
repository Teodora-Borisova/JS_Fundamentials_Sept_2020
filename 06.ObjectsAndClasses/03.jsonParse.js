function jsonParse(objectAsString){

    let parsedObject = JSON.parse(objectAsString);

    for (const key of Object.keys(parsedObject)) {
        console.log(`${key}: ${parsedObject[key]}`);
        
    }
    
}

let input = '{"name": "George", "age": 40, "town": "Sofia"}'
jsonParse(input);