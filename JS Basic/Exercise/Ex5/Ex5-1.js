let point = prompt("Key your point");
let grad ;

grad =  (point >= 80) ? "Your grad is A" : 
        (point >=70 && point <= 79) ? "Your grad is B" : 
        (point >=60 && point <= 69)? "Your grad is C" :
        (point >=50 && point <= 59) ?  "Your grad is D":
        "Your grad is F";

        alert(grad) ; 