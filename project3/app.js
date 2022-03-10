let poljaElem = document.querySelectorAll("#cont > div");
let polja = [];

for(let i=0; i<4; i++){
    polja[i] = [];
}

let brojZauzetih = 0;

function random(){
    if(brojZauzetih < 16){
        let broj =  (Math.floor(Math.random()*2)+1)*2;
        let x =  (Math.floor(Math.random()*4));
        let y =  (Math.floor(Math.random()*4));
        if(polja[x][y].zauzeto){        
            random();
        }
        else{
            polja[x][y].zauzeto = true;
            polja[x][y].broj = broj;
            brojZauzetih++;
        }
    }
    else{
        gameOver();
    }
}

function setup() {
    let j= 0;
    let i = 0;
    poljaElem.forEach(polje => {
        polja[i].push({elem: polje, broj: 0,  zauzeto: false})
        j++;
        if(j==4){
            j=0; 
            i++;
        }
    });
    random()
}

document.addEventListener("keyup", (event) => {
    switch(event.key){
        case "ArrowUp":
            for(let i = 0; i<4; i++){
                for(let j = 0; j<4; j++){
                    console.log("here :", polja[i][j].zauzeto);
                }
            }
            random();
            break;
        case "ArrowDown":
            console.log("dole");
            break;
        case "ArrowRight":
            console.log("desno");
            break;
        case "ArrowLeft":
            console.log("levo");
            break;     
        default: 
            console.log("Wrong key");  
    }
});


function gameOver() {
    console.log("kraj");
}
setup();