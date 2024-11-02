/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = function(s) {
    let letter = s[0];
    let count =1;
    let string = s[0];
    for (let i = 1; i < s.length; i++) {
        if (letter===s[i]){
            if(count<2){
                count++;
                string+=s[i];
            }
        }else{
            count=1;
            letter=s[i];
            string+=letter;
        }
    }
    return string
};