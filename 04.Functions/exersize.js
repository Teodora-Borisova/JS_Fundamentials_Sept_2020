function signCheck( a, b, c){

  let result = ' ';
  if ( a >= 0 && b >= 0 && c >= 0){
    result = "Positive";
  }else if ( a < 0 && b >= 0 && c >= 0){
    result = 'Positive';
  }else if ( a < 0 && b < 0 && c >=0 ){
    result = 'Positive';
  }else if( a < 0 && b < 0 && c < 0){
    result = 'Negative';
  }else if ( a >= 0 && b >= 0 && c < 0){
    result = 'Negative'
  }else if( a >= 0 && b < 0 && c < 0){
    result = 'Positive'
  }
  
  console.log(result);

}

signCheck(-1, 0, 1);