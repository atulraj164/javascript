
let button=document.querySelector("button");

let val=0;
button.onclick=(evt) => {
    console.log("Event triggered!");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
};

let div=document.querySelector(".div");


div.onmouseover=()=>{
    div.innerHTML=
  `
        <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-NIyswt68xV-ttXdjQfpvMS4ZjOCDIDQRmQ31awCmIeU2Mdnvtnbo6XsL&s=10"
            alt="ACP"
            width="300"
            height="200"
        >
    `;
};
div.onmouseleave=()=>{
    div.innerHTML="<h3>50% discount</h3>";
};

//handling event using event handler

let div2=document.querySelector(".div2");

let handle=()=>{
    div2.innerHTML=
    `<img src="https://i.ytimg.com/vi/LXdFfcq0S4k/sddefault.jpg" 
     alt="acp"
     width="300"
     height="200">`;
}
let handle2=()=>{
    div2.innerHTML="<h3>50% discount</h3>";
}
div2.addEventListener("mouseover",handle);
div2.addEventListener("mouseleave",handle2);