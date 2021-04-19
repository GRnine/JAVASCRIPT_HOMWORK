let ExtractCurrencyValue = function(srt,rate){
    let NewString = srt.slice(1) ; 
    return parseInt(NewString) * rate ; 
}