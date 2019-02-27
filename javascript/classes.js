class Student{
    constructor(a=10,b=10) {
        this.firstname = a;
        this.lastname = b;
        this.age;
    }
    getFullName() {
        return this.firstname+this.lastname;
    }
}

let stu = new Student('Koushik','Mani');
stu.firstname = 'koushik';
stu.lastname = 'm';
stu.age = 20;
console.log(stu.getFullName());

class Department extends Student {
    constructor(c) {
        super();
        this.deptName = c;
        
    }
    getDeptName() {
       
        return this.deptName;
    }
}

let dept = new Department('Mech');
console.log(dept.deptName);
console.log(dept.firstname);

let m = new Map();
m.set("koushik","m");
m.set("koushik1","m1");
m.set("koushik","hey");

m.forEach((v,k) => {
    console.log(v);
    console.log(k);
});

var user = {name:'koushik',age:20,gender:'m'};
var {name,age} = {...user}//destructuring of an object
console.log(name);
console.log(age);
