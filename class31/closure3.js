const closure = (arr) => {
    return () => {
        if(arr.lenght>1){
            return false;
        }
        return true;
    }
}

let array = [123, 23]

const isEmpty1 = closure()