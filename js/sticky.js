window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    let toTop = document.getElementById("scrollToTop");
    header.classList.toggle("sticky", window.scrollY > 0);
    toTop.classList.toggle("showScrollTop", window.scrollY > 100)
})

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function hamb(){
    let button = document.getElementById('cta-hero');
    button.classList.toggle('visible');
}