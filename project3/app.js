let poljaElem = document.querySelectorAll("#cont > div");
let polja = [];
let size = 4;
let temp;
for(let i=0; i<size; i++){
    polja[i] = [];
}

let brojZauzetih = 0;

function random(){
    if(brojZauzetih < 16){
        let broj =  (Math.floor(Math.random()*2)+1)*2;
        let x =  (Math.floor(Math.random()*size));
        let y =  (Math.floor(Math.random()*size));
        if(polja[x][y].zauzeto){        
            random();
        }
        else{
            polja[x][y].zauzeto = true;
            polja[x][y].broj = broj;
            polja[x][y].elem.textContent = broj;
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
        if(j==size){
            j=0; 
            i++;
        }
    });
    random()
}
let z = 3;
function canGoUp(i, j){
    z--;
    while(z>0)
        return 1;
}

document.addEventListener("keyup", (event) => {
    switch(event.key){
        case "ArrowUp":
            console.log("gore");
            //##############
                for (i=0; i<size; i++){
                    for(j=0; j<size; j++){
                        if(polja[i][j].zauzeto){
                            if(i > 0 ){
                                if(polja[i-1][j].zauzeto != true){
                                    while(canGoUp(i, j)){
                                        temp =  polja[i][j].broj;
                                        console.log(temp);
                                        polja[i-1][j].elem.textContent = temp;
                                        polja[i-1][j].broj = temp;
                                        polja[i-1][j].zauzeto = true;
                                        polja[i][j].elem.textContent = "";
                                        polja[i][j].broj = 0;
                                        polja[i][j].zauzeto = false;
                                    }
                                }
                                else if(polja[i-1][j].broj == polja[i][j].broj){
                                    temp =  polja[i][j].broj;
                                    console.log("drugi slučaj:",temp);
                                    polja[i-1][j].elem.textContent = temp*2;
                                    polja[i-1][j].broj = temp*2;
                                    polja[i-1][j].zauzeto = true;
                                    polja[i][j].elem.textContent = "";
                                    polja[i][j].broj = 0;
                                    polja[i][j].zauzeto = false;
                                    brojZauzetih--;
                                }
                            }
                        }
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