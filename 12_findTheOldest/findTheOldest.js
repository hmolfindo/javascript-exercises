const findTheOldest = function(array) {
    function getAge(birth, death){
        if(!death){
            var death = new Date().getFullYear();
        }
            return death - birth;

    }
    const oldestPerson = array.reduce(  (oldest, person) => 
                                        getAge(person.yearOfBirth, person.yearOfDeath) < getAge(oldest.yearOfBirth, oldest.yearOfDeath) 
                                        ? oldest : person);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
