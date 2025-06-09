let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");


dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})


let typingEffect = new Typed("#text",{
    strings:["MERN stack Developer","WEB DEVELOPER","AMFI REGISTER MUTUAL FUND DISTRIBUTER"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,


})