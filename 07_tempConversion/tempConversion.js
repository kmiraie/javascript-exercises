const convertToCelsius = function(Ftemp) {
    let celsius = (Ftemp-32)*(5/9)
    return +(celsius.toFixed(1))

};

const convertToFahrenheit = function(Ctemp) {
    let fahrenheit = (Ctemp*(9/5))+32
    return +(fahrenheit.toFixed(1))

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
