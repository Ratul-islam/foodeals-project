const hamBurger = document.querySelector(".hamBurger");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const nav = document.querySelector("nav");
const dropDownMenu = document.querySelector(".drop-down-menu");
const dropDownMenu2 = document.querySelector(".drop-down-menu-2");
const dropDownBtn = document.querySelector(".dropdown-btn1");
const dropDownBtn2 = document.querySelector(".dropdown-btn2");
const sec3 = document.querySelector('#sec_3');


const pro = document.querySelector('.box1')
const pert = document.querySelector('.box2')
const ass = document.querySelector('.box3')
const cand = document.querySelector('.box4')
const jour = document.querySelector('.box5')


const box_pro = document.querySelector('.box-bg-1')
const box_pert = document.querySelector('.box-bg-2')
const box_ass = document.querySelector('.box-bg-3')
const box_cand = document.querySelector('.box-bg-4')
const box_jour = document.querySelector('.box-bg-5')

const formPro= document.querySelector('.foodeals-pro-general')
const formPert= document.querySelector('.foodeals-perticuliers ')
const formAss= document.querySelector('.foodeals-associations')
const formCand= document.querySelector('.foodeals-careers')
const formJour= document.querySelector('.foodeals-journaliste ')

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

pro.addEventListener('click',()=>{
    sec3.classList.remove('sec-3-none')
    formPro.classList.add("click-enable");
    formPro.classList.remove("click-disable");
    box_pro.classList.add('change-clr')

    box_pert.classList.remove('change-clr')
    box_ass.classList.remove('change-clr') 
    box_cand.classList.remove('change-clr')
    box_jour.classList.remove('change-clr')
    


    formPert.classList.add("click-disable");
    formAss.classList.add("click-disable");
    formCand.classList.add("click-disable");
    formJour.classList.add("click-disable");

    formPert.classList.remove("click-enable");
    formAss.classList.remove("click-enable");
    formCand.classList.remove("click-enable");
    formJour.classList.remove("click-enable");
});

pert.addEventListener('click',()=>{
    sec3.classList.remove('sec-3-none')
    formPert.classList.add("click-enable");
    formPert.classList.remove("click-disable");;
    box_pert.classList.add('change-clr')

    box_pro.classList.remove('change-clr')
    box_ass.classList.remove('change-clr') 
    box_cand.classList.remove('change-clr')
    box_jour.classList.remove('change-clr')

    formPro.classList.add("click-disable");
    formAss.classList.add("click-disable");
    formCand.classList.add("click-disable");
    formJour.classList.add("click-disable");

    formPro.classList.remove("click-enable");
    formAss.classList.remove("click-enable");
    formCand.classList.remove("click-enable");
    formJour.classList.remove("click-enable");
});
ass.addEventListener('click',()=>{
    sec3.classList.remove('sec-3-none')
    formAss.classList.add("click-enable");
    formAss.classList.remove("click-disable");;
    box_pro.classList.remove('change-clr')

    box_pert.classList.remove('change-clr')
    box_ass.classList.add('change-clr') 
    box_cand.classList.remove('change-clr')
    box_jour.classList.remove('change-clr')

    formPert.classList.add("click-disable");
    formPro.classList.add("click-disable");
    formCand.classList.add("click-disable");
    formJour.classList.add("click-disable");

    formPert.classList.remove("click-enable");
    formPro.classList.remove("click-enable");
    formCand.classList.remove("click-enable");
    formJour.classList.remove("click-enable");
});
cand.addEventListener('click',()=>{
    sec3.classList.remove('sec-3-none')
    formCand.classList.add("click-enable");
    formCand.classList.remove("click-disable");;
    box_pro.classList.remove('change-clr')

    box_pert.classList.remove('change-clr')
    box_ass.classList.remove('change-clr') 
    box_cand.classList.add('change-clr')
    box_jour.classList.remove('change-clr')

    formPert.classList.add("click-disable");
    formAss.classList.add("click-disable");
    formPro.classList.add("click-disable");
    formJour.classList.add("click-disable");

    formPert.classList.remove("click-enable");
    formAss.classList.remove("click-enable");
    formPro.classList.remove("click-enable");
    formJour.classList.remove("click-enable");
});
jour.addEventListener('click',()=>{
    sec3.classList.remove('sec-3-none')
    formJour.classList.add("click-enable");
    formJour.classList.remove("click-disable");;
    box_pro.classList.remove('change-clr')

    box_pert.classList.remove('change-clr')
    box_ass.classList.remove('change-clr') 
    box_cand.classList.remove('change-clr')
    box_jour.classList.add('change-clr')

    formPert.classList.add("click-disable");
    formAss.classList.add("click-disable");
    formCand.classList.add("click-disable");
    formPro.classList.add("click-disable");

    formPert.classList.remove("click-enable");
    formAss.classList.remove("click-enable");
    formCand.classList.remove("click-enable");
    formPro.classList.remove("click-enable");
});