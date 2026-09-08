//Dom
//it is a tree like representaion of our html document 
//each tag is known as node
//dom os responsible for making pur webpage interactive and dynamic


/*
//Dom selectors:-
//1>document.getElementById();
  let ele1=document.getElementById("Box");
  console.log(ele1);
  ele1.style.backgroundColor="yellow";
  
//2>document.getElementByClassName();
 let containers=document.getElementsByClassName("container");
 console.log(container);

 //html colllection is a impure array
console.log(Array.isArray(containers))

//3>document.getElementByTagName();
let elements=document.getElementsByTagName("div");
console.log(elements);

//4>document.querySelector();
let ele2=document.querySelector("div,#box, .container");
console.log(ele2);

//5>document.querySelectorAll();
let ele3=cument.querySelectorAll("div");
console.log(ele3);//node list 3[div,div,div]
console.log(Array.isArray(ele3));
*/
/*

//Dom manipulation
const mainTag=document.querySelector("main-container");
console.log(mainTag);


const h3tag=document.createElement("h3");

h3tag.textContent="hello shyamji";

const ptag=document.createElement("h3");

ptag.textContent="hello payalji";

console.log(h3tag);
console.log(ptag);

mainTag.append(h3tag,ptag); //will be viewed on htmp maintag main container div

*/

//EVENTS:-actions performed by user
//eg:-mouse enter ,mouse outerHeight,
//two ways to aply event:-
// 1>using event attribute using
// 2>using add event listner() method<-------------recomended  
//.


function singleClick(){
  console.log("btn clicked once");
}

function doubleClick(){
  console.log("btn clicked twice");
}

function hoverBtn(){
  console.log("btn scrolled here");
}

//using add event listner("event"."callbackfn")  method<-----recomended
/*
const h3Tag=document.createElement("h3");
h3Tag.textContent="click me";

h3Tag.addEventListener("click",()=>{
  console.log("hiii");
  h3Tag.style.backgroundColor="light blue";
});
document.body.append(h3Tag);

const box=document.querySelector("#id1");
console.log(box);


box.addEventListener("click" ,()=>{
  console.log("i am div");
});
*/
const Element=document.querySelectorAll("section");
console.log(Element);


//using eventlistener method

Element.forEach((x) => {
  x.addEventListener("mouseenter",()=>{
    x.style.backgroundColor=x.textContent;
  })

  x.addEventListener("mouseout",()=>{
     x.style.backgroundColor=x.white;
  })

});