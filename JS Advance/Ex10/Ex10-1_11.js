let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
];
let array2 = array1.map((item,index) => age(item,index))

 function age(item,index){
     let birth = item.birth.split("-")[0] ; 
     let Age   = 2019 - birth ; 
     array1[index].age = Age
     return array1[index] ;        
 }