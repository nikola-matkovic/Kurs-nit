
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