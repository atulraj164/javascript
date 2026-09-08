

let Student={
    Name:"aarush",
    subject:"pcm",
    class:"12"
}

for (let key in Student) {
   let op=`the value for ${key} is ${Student[key]}`;//template literals
    console.log(op);
}