const currencyUnit = {
    "ONE HUNDRED": 10000,
    TWENTY: 2000,
    TEN: 1000,
    FIVE: 500,
    ONE: 100,
    QUARTER: 25,
    DIME: 10,
    NICKEL: 5,
    PENNY: 1
}

function checkCashRegister(price, cash, cid) {
    let kusur = (cash - price) * 100;
    let temp;
    let finalObj = {status: "OPEN", change : []};
    //transoform cid to object
    let cidObject = {}
    let cidValue = 0;
    cid.forEach((value) => {
        cidObject[value[0]] = value[1] * 100;
        cidValue += value[1] * 100;
    })
    if(cidValue < kusur ){
        return {status: "INSUFFICIENT_FUNDS", change : []}
    }
    if(cidValue == kusur) {
        finalObj.status = "CLOSED";
    }
    for(let i in currencyUnit){
        temp = 0;
        while(kusur >= currencyUnit[i] && cidObject[i] >= currencyUnit[i]){
            temp += currencyUnit[i];
            kusur -= currencyUnit[i];
            cidObject[i] -= currencyUnit[i];
        }
        if(temp){
            finalObj.change.push([i, temp / 100])
        }
        else if(cidValue == kusur){
            finalObj.change.push([i, 0])
        }
    }
    if(kusur > 0){
        return {status: "INSUFFICIENT_FUNDS", change : []}
    }
    if(finalObj.status == "CLOSED"){
        finalObj.change.reverse();
    } 
    return finalObj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))