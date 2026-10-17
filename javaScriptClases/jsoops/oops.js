
const person=
{
    creature(){
        console.log("man");
    },
    name:"khapra",
    gender:"male",
    showDetail(){
     console.log(`name is ${this.name} gender  is ${this.gender}`);
    }

}

person.showDetail();
person.creature();


//prototype:-like inheritance

let riya={
     name:"riya",
    gender:"male",
}

riya.__proto__=person;
riya.creature();
riya.ge