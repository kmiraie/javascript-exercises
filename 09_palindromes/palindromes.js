const palindromes = function (pal) {
    let alphanumerical = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let cleanedString = pal
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('')

    let reversedString = cleanedString.split('').reverse().join('')

    return cleanedString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
