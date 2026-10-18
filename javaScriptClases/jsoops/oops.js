
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
//class

class car{

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    carDetail(){
     console.log(this.name);
    }

    constructor(name){
          this.name=name;
    }

}

//object
let thar=new car("thar");
thar.carDetail();

//inheritance
class human{
    eat(){
        console.log("eat");
    }
      sleep(){
        console.log("sleep");
    }
}
class engineer extends human{
  work(){
    console.log("enginners fix things and create new");
  }
}
engineer.ea
