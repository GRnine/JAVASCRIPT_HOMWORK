let Accumulator = function(string){
    this.value = string ; 
    this.read = function(){
        let v1 = prompt("Type your number");
        this.value = this.value + v1 ; 
    }
}
accumulator  = new Accumulator(10); 