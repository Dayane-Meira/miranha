

var spider1 = document.querySelector(".0");
var spider1 = document.querySelector(".1");
var spider1 = document.querySelector(".2");
var spider1 = document.querySelector(".3");
var spider1 = document.querySelector(".4");

jsAPIfile()
const sections = document.querySelectorAll('.js-scroll'); 

function animaScroll(){
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < 0){
            console.log("animar");
            section.classList.add('ativo');
        }
    })
}


window.addEventListener('scroll', animaScroll); 