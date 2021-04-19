function clean(arr) {
    let map = new Map() ;
    for(word of arr){

    let sort = word.toLowerCase().split("").sort().join("");
    map.set(sort,word)

    }

return Array.from(map) ; 

}