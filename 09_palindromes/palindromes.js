const palindromes = (string) => {
    let regEx = /[\W_]/g;
    let replaceStr = string.toLowerCase().replace(regEx, '');
    let reverseStr = replaceStr.split('').reverse().join('');
    return reverseStr === replaceStr;
};

// Do not edit below this line
module.exports = palindromes;
