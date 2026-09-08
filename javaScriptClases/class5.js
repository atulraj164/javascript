




//promise
const API="https://dummyjson.com/todos";

//whenever we fetch api url promise recived
let p1=fetch(API);
console.console.log(p1);


//promise using then catch
/*p1.then((resp)=>{
    let p2=resp.json():
    console.log(p2);
    p2.then((data)=>console.log(data.todos);
    p2.catch((err)=>console.log(err))
});

p1.catch((err)=>{
    console.log(err);
});

//promise using async
async function fetchTodosData() {
    try {
        let resp=await fetch("https://dummyjson.com/todos");
        let data=awit.resp.json();
        console.log(data);
    } catch (error) {
        console.log("error");
    }
}

fetchTodosData();

*/



//Timer Functions:-


/*
//1)set interval(callback fn,interval time)
//execute the function agin and again in given interval
let id=setInterval(() => {
    console.log("hi");
}, 1000);//time



//2)set Timeoout(callback fn,delay)
//execute function whent time is finished

setTimeout(() => {
    console.log("by");
}, 8000);//time
*/




//event loop

//flow:- hi-->by-->t2-->t1 //first synchronus(codes executing continuously) code run then asynchronus(codes that waits) code runs
//

console.log("hi");

setTimeout(function t1() => {
    console.log("t1");
}, 5000);

setTimeout(functions t2() => {
    console.log("t2")
}, 2000);

console.log("by");


