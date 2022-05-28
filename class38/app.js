const elements = document.querySelectorAll(".inputs")
const div = document.querySelector("div")

const changeFunction = () => {
    console.log("works")
    div.style.backgroundColor = `rgb(${elements[0].value}, ${elements[1].value}, ${elements[2].value} )`
    change();
}

elements.forEach( element => {
    element.addEventListener("change", changeFunction)
}
)

function change(){
    document.getElementById("r").textContent = elements[0].value;
    document.getElementById("g").textContent = elements[1].value;
    document.getElementById("b").textContent = elements[2].value;
}


changeFunction()