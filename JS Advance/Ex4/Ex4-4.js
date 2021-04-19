function  SumSalaries(obj){
    let SumSalaries = 0 ; 
    for(let money in obj){
        SumSalaries = SumSalaries + obj[money];
    }
return SumSalaries ;     
}