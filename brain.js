var button = document.querySelector(".hamBurger");
var ham1 = document.querySelector(".ham1");
var ham2 = document.querySelector(".ham2");
var ham3 = document.querySelector(".ham3");
var menu = document.querySelector("nav");
var h2 = document.querySelectorAll("h1");
var p = document.querySelectorAll("p");
var cards = document.querySelectorAll(".card");
var landBox = document.querySelectorAll(".land-boxes");
const loader = document.querySelector(".preload");

window.addEventListener("load", ()=> {
    loader.classList.add('preloader-shift')
})

button.addEventListener("click", ()=>{
    menu.classList.toggle("nav-shift");
    ham1.classList.toggle("ham-transform-right");
    ham2.classList.toggle("ham-transform-middle");
    ham3.classList.toggle("ham-transform-left");
})



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("h2-in", entry.isIntersecting);
    })
})
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("card-in", entry.isIntersecting);
    })
},{
    rootMargin: "-50px",
})

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("p-in", entry.isIntersecting);
    })
},{ 
    
    rootMargin: "100px",
})




cards.forEach(card => {
    observer1.observe(card)
})
landBox.forEach(box => {
    observer1.observe(box)
})
h2.forEach(h2=> {
    observer.observe(h2)
})
p.forEach(p=>{
    observer2.observe(p)
})