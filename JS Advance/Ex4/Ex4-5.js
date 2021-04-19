let multiplyNumeric = function(obj,time){
    for(let key in obj){
        if(typeof(obj[key]) == "number"){
            obj[key] = obj[key] * time; 
        }
    }
 return obj ; 
}