/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {// 90 , 989

     let carry = 0;
     let sum = "";

     let diff  = num1.length - num2.length;
     const zeros = Math.abs(diff);

       if(diff !== 0) {
        for(let i = 0; i < zeros; i++) {
            if(diff < 0) {
                 num1 = "0" + num1;
            }else {
                 num2 = "0" + num2;
            }
        }
       }
 
    const num1Len = num1.length;
    const num2Len = num2.length; 
    
    for(let i = num1Len-1 ; i >= 0; i--) {
        const num1Int = parseInt(num1[i]);
        const num2Int = parseInt(num2[i]);
        
        let sumCurr = num1Int + num2Int + carry;

        sum = (sumCurr%10).toString() +  sum ;
        carry = Math.floor(sumCurr/10); 
    }

       if(carry) {
            sum = carry + sum;
        }

    return sum;
};
