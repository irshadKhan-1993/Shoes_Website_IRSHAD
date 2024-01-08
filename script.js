let toggleBar = document.querySelector(".nav_div .nav .toggle_bar");
toggleBar.addEventListener("click",()=>{
    let x = document.querySelectorAll(".x");
    let vh100 = document.querySelector(".nav");
    vh100.classList.toggle("vh-100");
    x.forEach((element)=>{
        element.classList.toggle("nav_toggle");
    });
});