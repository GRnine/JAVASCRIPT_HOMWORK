let calculator = {
    value1:"",
    value2:"",
    
    read : function(){
        let v1 = +prompt("num1");
        let v2 = +prompt("num2");
        this.value1 = v1;
        this.value2 =v2;
    },
    sum : function(a,b){
        return this.value1 + this.value2 ;
    },
    mul = function(a,b){
        return this.value1 * this.value2 ; 
    }
}