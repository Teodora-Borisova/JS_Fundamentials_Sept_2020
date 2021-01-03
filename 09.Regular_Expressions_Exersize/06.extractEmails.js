function solve(input){

   

    for (let line of input) {
        let regex = /\b([a-z0-9]+)([\.\-_]?)([a-z0-9]+)@([a-z\-]+)\.([a-z\-]+)\.?([a-z]+){1,}?/g;
        let match = line.match(regex);
        //let mail = match.join('')
        if( match){
            let result = match + '\n';    
            console.log(result);
            
        }       
    }
}
//solve([ 'Please contact us at: support@github.com.', 'end' ])
solve(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'])