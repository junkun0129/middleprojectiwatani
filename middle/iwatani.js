window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    header.classList.toggle("scroll", window.scrollY > 600);

});

