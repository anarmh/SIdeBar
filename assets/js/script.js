"use strict";

// let input=document.querySelector("input");
// console.log(input);
// let button=document.querySelector("button");
// console.log(button);
// let ol=document.querySelector("ol")
// console.log(ol);

// button.addEventListener("click",function(){

    
//     if(isNaN(input.value)){
//         alert("Not a Number!")
//         return;
//     }
//     else{
//         let li=document.createElement("li")
//         li.innerText=input.value
//         ol.append(li);
        
//     }


// })

let sidebar=document.querySelector(".sidebar");
let closeIcon=document.querySelector(".close")
let openIcon=document.querySelector(".open");


openIcon.addEventListener("click",function(){
    sidebar.classList.remove("hide");
    this.classList.add("d-none")
    closeIcon.classList.remove("d-none")
})
closeIcon.addEventListener("click",function(){
    sidebar.classList.add("hide");
    this.classList.add("d-none")
    openIcon.classList.remove("d-none")
})

