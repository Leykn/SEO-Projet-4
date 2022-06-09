window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    let toTop = document.getElementById("scrollToTop");
    header.classList.toggle("sticky", window.scrollY > 0);
    toTop.classList.toggle("showScrollTop", window.scrollY > 100)
})

function hamb(){
    let button = document.getElementById('cta-hero');
    button.classList.toggle('visible');
}