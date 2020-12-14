/** 12.14 最大回文串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var max = "",str="";
    for(var i = 0 ; i < s.length ; i++){
        if(s+1 < s.length && s[i] == s[i+1]){
            str = s[i]+s[i+1];
            str = digun(i,i+1,str);
            max = max.length>str.length?max:str;
        }
        if(i+2 < s.length && s[i] == s[i+2]){
            str = s[i]+s[i+1]+s[i+2];
            str = digun(i,i+2,str);
            max = max.length>str.length?max:str;
        }
    }
    return max;
    function digun(left,right,str){
        if((left-1>=0 && right < s.length) && s[left-1]==s[right+1]){
            str = left+str+right;
            return digun(left-1,right+1,str)
        }else{
            return str
        }
    }
};
var str1214="babad";
longestPalindrome(str1214);