let obj = {} ; 
let InputKey ; 
let InputValue ;
while(true){
      InputKey = prompt("Type your key") ; 
      if(InputKey == "stop"){break ; }
      InputValue = prompt("Type your Value") ;
    obj[InputKey] = InputValue ; 
}

console.log(obj) ; 