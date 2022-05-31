const form =  document.getElementById("singup")
const firstInput= document.querySelector("#first")
const lastInput= document.querySelector("#last")
const passwordInput= document.querySelector("#password")
const birthInput = document.querySelector("#birth")

const valid = (input, errorId) =>{
    let valid = false;
    const exist = isEmpty(input, errorId){
        
    }
}


const exist = (input, errorId) => {
    if(input.value === ""){
        document.getElementById(errorId).textContent = "please insert something"
    }
}


const submitFunction = (event) => {
    event.preventDefault();
    exist(firstInput, "errorF" );
    exist(lastInput, "errorL" );
    exist(passwordInput, "errorP" );
    exist(firstInput, "errorB" );
}

form.addEventListener("submit", submitFunction)