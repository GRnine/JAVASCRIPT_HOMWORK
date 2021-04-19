let truncate = function (str,Maxlength){
    let check = str.length ; 
    let NewString = "" ;
    if(check > Maxlength){
        NewString = str.slice(0,Maxlength-1) + "...";
        return NewString ; 
    }else {
        return str ; 
    }
}