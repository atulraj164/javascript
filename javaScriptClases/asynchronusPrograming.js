
console.log("hi");
let f1=()=>{
 console.log("hello");
};
setTimeout(f1,4000);
console.log("teri maa ki");
/*
function getData(value, getNextData){

    setTimeout(()=>{
        console.log(value);
      if(getNextData){
        getNextData();
    }
    },4000);
   
}

getData(3, ()=>{
    getData(2,()=>{
        getData(1,()=>{
            console.log("completed");
        });
    });
});

 */
let promise=new Promise((resolve,reject)=>{
     setTimeout(() => {
         resolve("success")
     }, 5000);
});

promise.then(()=>{
    console.log("data delivered");
})

promise.catch(()=>{
    console.log("delivery fail");
})
