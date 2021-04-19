let Calculator = function () {
    this.read = function(){
        this.v1 = +prompt("num1");
        this.v2 = +prompt("num2");
    }    
    this.sum = function(){
        return this.v1 + this.v2 ; 
    }
    this.mul = function(){
        return this.v1 * this.v2 ;
    }
}

calculator = new Calculator() ; 