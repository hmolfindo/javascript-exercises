const leapYears = function(year) {
    function isLeapYear(){
        if(year % 4 == 0){
            if(year % 100 == 0){
                if(year % 400 == 0){
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
    }
    if (isLeapYear()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
