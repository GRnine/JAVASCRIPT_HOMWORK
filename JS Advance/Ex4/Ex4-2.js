let isEmpty = function(obj){
    for(let prop in obj){
        if(prop != ""){
            return true ; 
        }else{
            return false ; 
        }
    }
}