var nizObjecata = [{name: "Nikola"}, {name: "rijad"}, {name: "ramiz"}];

nizObjecata.forEach( obj =>{
   if(obj["name"] === "rijad"){
    console.log(obj);
   }
})

function findObject(niz, parametar, vrednostParametra){
    niz.forEach( obj =>{
        if(obj[parametar] === vrednostParametra){
         console.log(obj);
        }
     })
}

findObject(nizObjecata, "name", "rijad")