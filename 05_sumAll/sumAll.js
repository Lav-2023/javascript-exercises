const sumAll = function(firstInt, lastInt) {
    if(firstInt < 0 || lastInt < 0) return "ERROR";
    if(!Number.isInteger(firstInt) || (!Number.isInteger(lastInt))) return "ERROR";
    let sumOfInt = 0;
    if(firstInt > lastInt) {
        for(let i = lastInt; i <= firstInt; i++) {
            sumOfInt += i;
        }
    } else {
        for(let i = firstInt; i <= lastInt; i++) {
            sumOfInt += i;
        }
    }
    return sumOfInt;
};

// Do not edit below this line
module.exports = sumAll;
