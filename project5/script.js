import fetch from 'node-fetch';

let currencies = ["RSD", "USD", "EUR"]
let crypto = "ETH"

function createAddress(s, t){
    let address = `http://api.coinlayer.com/api/live?`
    const access_key = `c617696bbaf9bf86290bdc886aa365a0`
    let symbols = s
    let target = t
    address += `access_key=${access_key}`
    address += `&symbols=${symbols}`
    address += `&target=${target}`
    return address
}

async function getData(symbols, target) {
    let address = createAddress(symbols, target)
    let response = await fetch(address);
    let data = await response.json();
    return data;
}

function convert(amonut, currencies, crypto) {
    currencies.forEach(currency => {
        getData(crypto, currency).then(data => {
            let value = data.rates[crypto];
            let converted = (value * amonut).toFixed(2)
            console.log(amonut, crypto , "U", currency, " = ", converted)
        });
    })
}

convert(0.0842, currencies, crypto);