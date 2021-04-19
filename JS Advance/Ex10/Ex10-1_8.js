let array1 = [1,3,4,5,6,7,8];
let array2 = [] ;

array2 = array1.map((item) => check(item));
function check(item) {
    let number = "";
    if(item % 2 == 0 ){
        number = "even" ; 
    }else{
        number = "odd"
    }
return number ; 
}