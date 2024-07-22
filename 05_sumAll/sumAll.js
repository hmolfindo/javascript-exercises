const sumAll = function(startNum, endNum) {
    let result = 0;
    const start = Math.min(startNum, endNum);
    const finish = Math.max(startNum, endNum);

    function isValid(){
        if(typeof startNum == 'number' &&
        typeof endNum == 'number' && 
        Number.isInteger(startNum) && 
        Number.isInteger(endNum) &&
        start > 0 &&
        finish > 0 ){
            return true;
        };
    }

    if(!isValid()){
        return "ERROR";
    }else{
        for(i = start; i < finish + 1; i++){
            result += i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
