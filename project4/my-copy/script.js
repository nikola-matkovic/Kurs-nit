
const elem = document.getElementById("top-arrow")
window.addEventListener("scroll", () => {
    let top  = window.pageYOffset || document.documentElement.scrollTop
    if(top > 180){
        elem.classList.add("show");
    }
    else{
        elem.classList.remove("show");
    }
})

const navLinks = document.querySelectorAll("nav  #links > li > a");

function test(){
    navLinks.forEach( (link) =>{
        link.classList.add("active");
    })
}
test();