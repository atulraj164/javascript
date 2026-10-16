
console.dir(document);

console.dir(document.body)
console.log(document.body);

console.dir(document.getElementById("m2"));
console.dir(document.getElementsByClassName("myclass"))

let m2element=document.querySelector("#m2");
console.log(m2element);

let h2elements=document.querySelectorAll("h1");

let divelement=document.querySelector("div");

console.log(divelement.ATTRIBUTE_NODE);

//Dom properties
console.log(divelement.tagName);
console.log(divelement.innerText);
console.log(divelement.innerHTML);
divelement.innerHTML="<div> <h4>tere mast mast do nain </h4> </div>";
console.log(divelement.innerHTML);

document.querySelector(".myclass").innerHTML="<h1 style="+"visibility:hidden"+"> xyz</h1>";
console.log(document.querySelector(".myclass").innerText);
console.log(document.querySelector(".myclass").textContent);

//exercise create three div with same class name and add some unique  text in each

let div=document.querySelectorAll(".h1div");
 console.log(div[0]);
 div[0].innerText="i am";
  div[1].innerText="shivaji buddy";
    div[2].innerText="cool";
    //or
      let idx=0;
    for (i of div){
        i.innerText=`div ${idx}`;
        idx++;
    }
let paragraph=document.querySelector("p");
console.dir(paragraph.getAttribute("class"));
paragraph.setAttribute("class","paragraph");
console.dir(paragraph.getAttribute("class"));


//adding new element

let button=document.createElement("button");
button.innerText="button";

let divEle=document.querySelector("div");
 divEle.append(button);

 let heading=document.createElement("h3");
 heading.innerText="this is new Element";

 document.querySelector("div").append(heading);

 
