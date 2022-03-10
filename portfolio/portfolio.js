const p = [
    "HI! I'm Nikola, yong Front-end web developer from Novi Pazar - Serbia",
    "Let's build something special together ?"
]

let firstTextSize = 74;
let secoundTextSize = 43;


const pElement = document.querySelector("#home p");

setInterval(() => {
    if(pElement.textContent == p[0]){
        pElement.textContent = p[1];
        pElement.style.setProperty("--number-of-chars",  secoundTextSize);
    }    
    else{
        pElement.textContent = p[0];
        pElement.style.setProperty("--number-of-chars", firstTextSize);
    }
}, 6000);

const nav = document.querySelector("nav");
const home = document.querySelector("#home");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");

document.addEventListener( "scroll",  () => {
    let skillsInfoY = skills.getBoundingClientRect().top; 
    let ProjectsInfoY = projects.getBoundingClientRect().top; 
    let contactInfoY = contact.getBoundingClientRect().top; 
    if(skillsInfoY <= 120){
        nav.classList.add("white");
        console.log("Home se vidi");
    }else{
        nav.classList.remove("white");
    }
    if(ProjectsInfoY <= 120){
            nav.classList.remove("white");
            console.log("projekti se vide");
    }
    console.log("INFO:", contactInfoY)
    if(contactInfoY <= 120){
        nav.classList.add("white");
        console.log("Kontakti se vide");
    }
});



// let homeOptions = {
//     rootMargin: "-120px 0px"
// // }
// const homeObserver = new IntersectionObserver
// (function(
//     entries,
//     homeObserver
// ){
//     entries.forEach( entry => {
//         if(entry.isIntersecting){
//             nav.classList.remove("white");
//             console.log("Home se vidi");
//         }
//         else{
//             nav.classList.add("white");
//             console.log("Home se ne vidi");
//         }
//     })  
// },
// homeOptions); 
// homeObserver.observe(home)

// let skillsOptions = {
//     rootMargin: "121px 0px"
// }
// const skillsObserver = new IntersectionObserver
// (function(
//     entries,
//     skillsObserver
// ){
//     entries.forEach( entry => {
//         if(entry.isIntersecting){
//             nav.classList.add("white");
//             console.log("skills se vidi");
//         }
//         else{
//             nav.classList.remove("white");
//             console.log("skills se ne vidi !");
//         }
//     })  
// },
// skillsOptions); 
// skillsObserver.observe(skills)