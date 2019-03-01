var obj = {name:'koushik'};
var student = {name:'mani'};
var greeting = function(a,b,c){
    return "welcome " +this.name+" to "+a+" "+b+" in "+c;
}
console.log(greeting.call(obj,"test1","test2","test3"));
console.log(greeting.call(student,"test1","test2","test3"));

let x = greeting.bind(obj,"koushik","m","TEST");
console.log(x());

greeting.apply(obj,["koushik","m","TEST"]);