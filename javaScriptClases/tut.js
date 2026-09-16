

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

//hiher order functions:- functions that uses other functions either take them as parameter or return them as output
arr.forEach((val,idx,array)=>{
 console.log(val,idx);
});
