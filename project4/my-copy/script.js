
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

function active(a){
    navLinks[a].classList.add("active");
}

const numbers = document.querySelectorAll("#numbers > div > p");

const speed = 1000;
const to = [1032, 604, 412, 1543];

numbers.forEach((counter, index) => {
    const counterNumber = to[index];
    const updateCount = setInterval(() => {
        
        const divContent = +counter.innerText;
        const increaseBy = counterNumber / speed;

        divContent < counterNumber ? 
        counter.innerHTML = Math.ceil(divContent + increaseBy) : 
        clearInterval(updateCount);
    }, 1);
});