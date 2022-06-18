const currencyUnit = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    DOLAR: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01
}

function checkCashRegister(price, cash, cid) {
    let kusur = cash - price;
    let temp;
    let finalObj = {status: "OPEN", change : []};
    //transoform cid to object
    let cidObject = {}
    cid.forEach((value) => {
        cidObject[value[0]] = value[1];
    })
    for(let i in currencyUnit){
        temp = 0;
        while(kusur >= currencyUnit[i] && cidObject[i] >= currencyUnit[i]){
            temp += currencyUnit[i];
            kusur -= currencyUnit[i];
            cidObject[i] -= currencyUnit[i];
        }
        if(temp){
            finalObj.change.push([i, temp])
        }
    }
    return finalObj;
}

console.log(checkCashRegister(19.5,
    20,
    [   ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25], 
        ["ONE", 90], 
        ["FIVE", 55], 
        ["TEN", 20], 
        ["TWENTY", 60], 
        ["ONE HUNDRED", 100]
    ]));
// {status: "OPEN", change: [["QUARTER", 0.5]]}


// console.log(checkCashRegister(3.26,
//     100,
//     [   ["PENNY", 1.01], 
//         ["NICKEL", 2.05], 
//         ["DIME", 3.1], 
//         ["QUARTER", 4.25], 
//         ["ONE", 90], 
//         ["FIVE", 55], 
//         ["TEN", 20], 
//         ["TWENTY", 60], 
//         ["ONE HUNDRED", 100]
//     ]))
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}