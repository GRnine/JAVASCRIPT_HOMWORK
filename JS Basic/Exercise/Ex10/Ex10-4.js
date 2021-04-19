let number = prompt("Key your number rang 1-100");

while( number != GuessNumber){
   let  GuessNumber = prompt("Key your number rang 1-100");
   if(number == GuessNumber){
       alert("Correct !!!");
       break;
   }else if (number > GuessNumber){
       alert("more than !!!");
   }else {
       alert("less than !!!")
   }
}
