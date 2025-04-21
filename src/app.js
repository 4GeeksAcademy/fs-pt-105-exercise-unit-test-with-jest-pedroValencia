const oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07,
    "GBP": 0.87, 
};

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const fromDollarToYen = (dollar) => {

let euro = dollar / oneEuroIs.USD;
return euro * oneEuroIs.JPY;
}

const fromYenToPound = (yen) => {

let euro = yen / oneEuroIs.JPY;
return euro * oneEuroIs.GBP;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};