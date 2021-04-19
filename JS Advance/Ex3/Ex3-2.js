let obj = {} ; 
let Fruit ; 
let Value ;
while(true){
      Fruit = prompt("Type your key") ; 
      if(Fruit == "stop"){break ; }
      Value = +prompt("Type your Value");
      if(Value > 1){Fruit = Fruit + "s"} ; 
    obj[Fruit] = Value ; 
}

console.log(obj) ; 