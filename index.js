window.addEventListener("scroll", function name(params) {
    let navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed",this.scrollY>10);
});
function navBack() {
    let nav = document.getElementById("nav").classList.toggle("change")
};


