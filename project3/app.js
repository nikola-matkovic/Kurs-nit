let poljaElem = document.querySelectorAll("#cont > div");
let polja = [];
let brojZauzetih = 0;

function random(){
    if(brojZauzetih < 16){
        let broj =  (Math.floor(Math.random()*2)+1)*2;
        let polje =  (Math.floor(Math.random()*16));
        if(polja[polje].zauzeto){        
            random();
        }
        else{
            polja[polje].zauzeto = true;
            poljaElem[polje].textContent = broj;
            brojZauzetih++;
        }
    }
    else{
        gameOver();
    }
}

function setup() {
    poljaElem.forEach(polje => {
        polja.push({elem: polje, broj: 0,  zauzeto: false})
    });
    random()
    random()
}

function gameOver() {
    console.log("kraj");
}

setup();


console.log(polja);