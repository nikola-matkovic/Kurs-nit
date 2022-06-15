let funModule = ( () => {
    return {
        isCuteMixin : (obj) =>  { obj.isCute = () =>  true; },
        singMixin : (obj) => {  obj.sing = ()  => { console.log("Singing to an awesome tune");}
    }
}})()