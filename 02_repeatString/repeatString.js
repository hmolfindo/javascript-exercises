const repeatString = function(string, times) {
    if(times < 0){
        return "ERROR";
    }else{
    let result = '';
    for(i = 0; i < times; i++){
        result += string;
    }
    return result;
    }
}

// Do not edit below this line
module.exports = repeatString;
