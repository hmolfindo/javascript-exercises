const removeFromArray = function(array, ...item) {
    return array.filter(value => !item.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
