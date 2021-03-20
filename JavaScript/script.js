//Selectors
let header = document.querySelector(".header");
let humbergarMunu = document.querySelector(".humbergar-menu");

window.addEventListener("scroll" , function(){
    let windowPostion = window.scrollY > 0;
    header.classList.toggle("active" , windowPostion);
})

humbergarMunu.addEventListener("click" , function(){
    header.classList.toggle("menu-open");
})
