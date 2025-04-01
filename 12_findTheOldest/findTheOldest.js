const age = (birthYear, deathYear) => {
    if(!deathYear) {
        deathYear = new Date().getFullYear()
    }
    return deathYear - birthYear;
}

const findTheOldest = (people) => {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = age(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = age(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
