const fibonacci = function(num) {
    let num1 = 1;
    let num2 = 0;
    let sum = 1;

    if(num == 0){
        return 0;
    }else if(num < 0){
        return "OOPS";
    }else{
        for(i = 1; i < num; i++){
            sum = num1 + num2
            num2 = num1;
            num1 = sum;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = fibonacci;
