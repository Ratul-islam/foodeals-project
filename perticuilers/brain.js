const hamBurger = document.querySelector(".hamBurger");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const nav = document.querySelector("nav");
const dropDownMenu = document.querySelector(".drop-down-menu");
const dropDownMenu2 = document.querySelector(".drop-down-menu-2");
const dropDownBtn = document.querySelector(".dropdown-btn1");
const dropDownBtn2 = document.querySelector(".dropdown-btn2");

hamBurger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-shift");
    ham1.classList.toggle("ham-transform-right");
    ham2.classList.toggle("ham-transform-middle");
    ham3.classList.toggle("ham-transform-left");
})
dropDownBtn.addEventListener("click", ()=>{
    dropDownMenu.classList.toggle('drop-down-menu-trigger');
    dropDownMenu2.classList.remove('drop-down-menu-trigger');
    dropDownBtn.classList.toggle("clr-green");
    dropDownBtn2.classList.remove("clr-green");
})
dropDownBtn2.addEventListener("click", ()=>{
    dropDownMenu2.classList.toggle('drop-down-menu-trigger');
    dropDownBtn2.classList.toggle("clr-green");
    dropDownMenu.classList.remove('drop-down-menu-trigger');
    dropDownBtn.classList.remove("clr-green");
    console.log('hello')
})
