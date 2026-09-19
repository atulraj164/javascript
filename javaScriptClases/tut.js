

let Student={
    Name:"aarush",
    subject:"pcm",
    class:"12"
}

for (let key in Student) {
   let op=`the value for ${key} is ${Student[key]}`;//template literals
    console.log(op);
}

let arr=[1,2,3,4,5];
let brr=[1,2,3,4,5];
console.log(arr);
console.log(arr.toString());
console.log(arr.concat(brr));
console.log(arr.slice(1,3));
let avg=0;
for(let i of arr){
    avg+=i;
}
console.log(`avg marks of arr=${avg/arr.length}`);


function sum(a,b){
    return a+b;
}
let s=sum(5,9);
console.log(s);

//arraow function
const Arrowsum=(a,b)=>{
    return a+b;
};
s=Arrowsum(5,7);


arr=["hello","bello","khello"];
//for each function a higher order function

let square=(s)=>{
    console.log(s*s);
};
arr.forEach(square);
//more methods ->filter,map


let arr2=arr.filter((val)=>{
    return val%2==0;
})
console.log(arr2);

arr2=arr.reduce((val1,val2)=>{
        return val1+val2;
})

console.log(arr2);
//window:-a global object provided by the browser to our project consist multiple methods and object like dom

//Dom(document object model):-whenever a webpage is loaded browser create a dom object automaticaly insode window object
  //           window->dom->html->body  manipulate html from js
  let cl=document.getElementsByClassName("myclass");
  console.dir(cl);
  cl.quer
//hiher order functions:- functions that uses other functions either take them as parameter or return them as output
arr.forEach((val,idx,array)=>{
 console.log(val,idx);
});

  
  let bl=document.getElementById("byid");
  console.dir(bl);
