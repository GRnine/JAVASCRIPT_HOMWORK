let array1 = [1, -3, 2, 8, -4, 5];
let array2 = [] ;

array2 = array1.map((item) => check(item));
function check(item) {
    let number = 0;
    if(item  <  0 ){
        number = item * -1 ; 
    }else{
        return item ; 
    }
return number ; 
}