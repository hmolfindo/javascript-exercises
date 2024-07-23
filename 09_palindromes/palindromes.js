const palindromes = function (string) {
    const validCharacters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cleanedString = string
                        .toLowerCase()
                        .split("")
                        .reverse()
                        .filter((character => validCharacters.includes(character)))
                        .join("");
    let result = cleanedString
                .split("")
                .reverse()
                .join("");

    if(result === cleanedString){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
