let KeyValue =+prompt("Would you like number of star");
let GetStar = " ";

function star(KeyValue){
    for(let i = 0 ; i <  KeyValue  ; i++){
        GetStar = GetStar + "*"; 
    }
return(GetStar)

}
console.log(star(KeyValue));