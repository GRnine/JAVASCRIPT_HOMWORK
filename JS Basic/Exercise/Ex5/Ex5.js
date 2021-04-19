let point = prompt("Key your point");
let grad ;

if(point >= 80){
    grad = "Your grad is A";
    alert(grad);
}else if(point >=70 && point <= 79){
    grad = "Your grad is B";
    alert(grad);
}else if(point >=60 && point <= 69){
    grad = "Your grad is C";
    alert(grad);
}else if(point >=50 && point <= 59){
    grad = "Your grad is D";
    alert(grad);
}else{
    grad = "Your grad is F";
    alert(grad);
}