let CheckSpam = function(spam){
    if(spam.indexOf("xxx") != -1  || spam.indexOf("viagra") != -1 ){
        return true;
    }else {
        return false ; 
    }
}