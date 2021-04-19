function sumInput(){
    let getArr = [] ;  
    let getSum = 0 ;  
    let count = 0;
    while(true){
    let input = +prompt("Type some thing");
        if(isNaN(input) == true){
            break ; 
        }else{
            getArr[count] = input ; 
            count ++ ;
        }

    }
    for(let i = 0 ; i < getArr.length ; i++){
        getSum += getArr[i] ; 
    }
    
 return getSum ;
}