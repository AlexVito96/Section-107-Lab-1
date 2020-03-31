
module.exports = {
    //object literal technique
    sayHello: function(text){
        console.log('Hello World' + text);
    },
    sum: function(num1, num2){
        return num1  + num2;
    },
    greater: function(num1, num2){
        //return the greater of num1 and num2
        if(num1 > num2){
            return num1;
        }
        return num2;
    },
    isEven: function(num){
        //return num % 2 === 0;
        if(num % 2 === 0){
            return true;
        }
        return false;
    },
    homeWrk: function(num){
        for( let x = 0; x <= num; x++){
            if(x % 2 === 0){
                return 0;
            }
        }


    }
}
