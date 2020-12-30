/** 12.14 最大回文串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var max = "",str="";
    for(var i = 0 ; i < s.length ; i++){
        if(i+1 < s.length && s[i] == s[i+1]){
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
//longestPalindrome(str1214);


/**  翻转词语位置
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // var left = 0,right = s.length - 1;
    // var leftString = "",rightString = "",reLeft="",reRight="";
    // while(left < right){
    //     if(s[left] != " "){
    //         leftString += s[left];
    //         left++
    //     }
    //     if(s[right] != " "){
    //         rightString = s[right]+rightString;
    //         right--;
    //     }
    //     if(s[left] == " " && leftString ==""){
    //         left++
    //     }else if(s[left] == " " && leftString !==""){
    //         reLeft =" "+leftString+reLeft;
    //         leftString = ""
    //         left++
    //     }
    //     if(s[right] == " " && rightString == ""){
    //         right--;
    //     }else if(s[right] == " " && rightString !==""){
    //         reRight +=rightString+" ";
    //         rightString = ""
    //         right--;
    //     }
    // }
    
    // if(s[left] == " " || s[right] == " " && rightString!= "" && leftString !=""){
    //     return reRight+rightString+" "+leftString+reLeft;
    // }else{
    //     return reRight+rightString+leftString+reLeft;
    // }
    var string = "",restring = "";
    for(var i = 0 ; i <= s.length ; i++){
        if(i == s.length || s[i] == " "){
            if(string !== ""){
                if(restring == ""){
                    restring = string;
                }else{
                    restring = string + " " + restring;
                }
                string = "";
            }
        }else{
            string+= s[i];
        }
    }
    return restring
};
// var str12141 = "the sky is blue"
// var a = reverseWords("F R  I   E    N     D      S      ")
// var b = reverseWords("  Bob    Loves  Alice   ")
// var c = reverseWords(str12141)
// var d = reverseWords("a good   example");
// console.log(a,b,c,d)
/**单词规律
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var dict = {},dict2={};
    var j = 0,string = "";
    for(var i = 0 ; i <= s.length ; i++){
        if(i==s.length || s[i] == " "){
            if(dict[pattern[j]]){
                if(string !== dict[pattern[j]]){
                    return false
                }
            }else{
                dict[pattern[j]] = string
                if(dict2[string] && dict2[string] !== pattern[j]){
                    return false
                }
                dict2[string] = [pattern[j]]
            }
            string = ""
            j++
        }else{
            string+=s[i];
        }
    }
    if(j<pattern.length){
        return false
    }
    return true
};
// var a = "abba";
var a = "he"
// var b = "dog cat cat dog"
// var b = "dog cat cat fish";
// var b = "dog dog dog dog"
var b ="cat"
//wordPattern(a,b)
var len = 0,num = 0;
var a = 20,arr = new Array(20);
for(var i = 0 ; i < a ; i++){
    arr[i] = parseInt(Math.random()*a);
}
// arr.sort((a,b)=>{
//     console.log(a,b);
// })

/** 数组拆分I
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>{
        return a-b
    });
    var num = 0,len = 0;
    nums.sort((a,b)=>{
        if(len%2 == 0){
            num += b;
        }
        len++
        return a-b
    })
    return num
};
// arrayPairSum([1,4,3,2])

/** 买卖股票时机2
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    var dp = [];
    dp[0] = 0;
    dp[1] = -prices[0];
    for(var i = 1 ; i < prices.length ; i++ ){
        dp[0] = Math.max(dp[0],dp[1] + prices[i] - fee); //目前利润
        dp[1] = Math.max(dp[1],dp[0] - prices[i]); // 最低股票
    }
    return dp[0];
};
// maxProfit([1, 3, 2, 8, 4, 9],2);
/**找不同
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // var a = 97,z=122,numS = 0, numT = 0;
    // var arr = new Array(26).fill(0);
    // for(var i = 0 ; i < t.length ; i++){
    //     if(i < s.length){
    //         numS = s[i].charCodeAt()-97;
    //         arr[numS]++;
    //     }
    //     numT = t[i].charCodeAt()-97;
    //     arr[numT]--;
    // }
    // for(var i = 0 ; i < arr.length ; i++){
    //     if(arr[i] == -1){
    //         var re = i + 97;
    //         return String.fromCharCode(re);
    //     }
    // }
    var len = 0
    for(var i = 0 ; i < t.length ; i++){
        if(i < s.length){
            len -= s[i].charCodeAt();
        }
        len += t[i].charCodeAt();
    }
    return String.fromCharCode(len)
};
findTheDifference("abcd",
"abcde")
/** 旋转图像
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var m = matrix.length , r = (m>>1)-1,c = (m-1) >>1;
    for(var i = 0 ; i <= r; i ++){
        for(var j = 0 ; j <= c ; j++){
            transofrm([j,i],[m-i-1,j]);
            transofrm([j,i],[m-j-1,m-i-1]);
            transofrm([j,i],[i,m-j-1]);
        }
    }
    function transofrm(arr1,arr2){
        var x1 = arr1[0],y1 = arr1[1];
        var x2 = arr2[0],y2 = arr2[1];
        var len = 0;
        len = matrix[y1][x1];
        matrix[y1][x1] = matrix[y2][x2];
        matrix[y2][x2] = len;
    }
    console.log(matrix)
};
var arr1219 = [[1,2,3],[4,5,6],[7,8,9]];
//rotate(arr1219);

/** 最大子序和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var dp = new Array(2);
    dp[0] = nums[0]; //是否能最大
    dp[1] = nums[0]; //是否连续
    for(var i = 1 ; i < nums.length ; i++){
        dp[0] = Math.max(dp[0],dp[1]+nums[i]);
        dp[1] = Math.max(dp[1]+nums[i],nums[i]);
    }
    return dp[0];
};
var arr12191 = [-2,1,-3,4,-1,2,1,-5,4];
// maxSubArray(arr12191); 
/** 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var fir = nums.length-1,sec = nums.length - 1,len = 0;
    while(sec >= 0){
        if(nums[sec] == val ){
            len  = nums[fir]
            nums[fir] = nums[sec];
            nums[sec] = len
            fir--
        }
        sec--
    }
    return fir
};
removeElement([3,2,2,3],3)


/** 最大连续1的个数
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0,num = 0;
    for(var i  = 0 ; i <= nums.length ; i++){
        if(i == nums.length || nums[i] == 0){
            max = max>num?max:num;
            num = 0;
        }
        if(nums[i] == 1){
            num++;
        }
    }
    return max
};
// findMaxConsecutiveOnes([1,1,0,1,1,1])
// findMaxConsecutiveOnes([1,0,1,1,0,1]);

/**使用最小花费爬楼梯
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var dp = new Array(cost.length).fill(0) ;
    for(var i = 0 ; i <= cost.length+1 ; i++){
        if(i == cost.length || i+1 == cost.length){
            return dp[i]
        }else{
            dp[i+1] = Math.min(dp[i]+cost[i] , dp[i]+cost[i+1])
        }
    }
};
var arr1222 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
//minCostClimbingStairs(arr1222);
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    var duilie = [root],num = 0,lep = 0,tep;
    var rearr = [];
    return BfS();
    
    function BfS(){
        while(duilie.length>0){
        tep = new Array();
        rearr.push(tep);
            num = duilie.length;
            for(var i = 0 ; i < num ; i++){
                if(duilie[0].left){
                    duilie.push(duilie[0].left);
                }
                if(duilie[0].right){
                    duilie.push(duilie[0].right);
                }
                if(duilie[0].val){
                    tep.push(duilie[0].val)
                }
                duilie.shift();
            }
            if(lep%2!==0){
                tep.reverse();
            }
            lep++;
        }
        return rearr;
    }
};

//zigzagLevelOrder(DoubleTree1116);
/** 分糖果
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var renum = 0,num =0,num1 = 0;
    var rearr = new Array(ratings.length);
    var i =0;
    while( i < ratings.length){
        if(ratings[i] < ratings[i+1]){ // 迭代运算
            renum++;
            rearr[i] = 1;
            num = diedai(i)
            i = num+i;
            continue;
        }   
        if(ratings[i] > ratings[i+1]){//递归运算
            num1 = digun(i);
            if(ratings[i-1]>ratings[i]){
                if(num1 >num){
                    renum+=num1-num;
                }
            }
            i = i+num1-2;
            continue;
        }
        if(ratings[i] == ratings[i+1] || i == ratings.length-1){
            rearr[i] = 1;
            renum++;
        }
        num = 0,num1 = 0,i++
    }
    return renum;
    function digun(len){
        var num = 0
        if(ratings[len] <= ratings[len+1] || len+1 == ratings.length){
            return 2
        }else{
            num = digun(len+1);
            rearr[len] = num
            renum+=num
            return num + 1
        }
    }
    function diedai(len){
        var num = 2
        while(ratings[len] < ratings[len+1]){
            rearr[len+1] = num;
            renum+=num
            num++
            len++
        }
        return  num-1;
    }
};
// // var arr1224 = [1,0,2];
// console.log(candy([1,0,2]),5); //5
// // var arr1224 = [1,2,2];
// console.log(candy([1,2,2]),4); // 4
// // var arr1224 = [1,3,2,2,1];
// console.log(candy([1,3,2,2,1]),7) // 7
// // var arr1224 = [1,6,10,8,7,3,2]
// console.log(candy([1,6,10,8,7,3,2]),18) //18
// // var arr1224 = [29,51,87,87,72,12]
// console.log(candy([29,51,87,87,72,12]),12) //12
// // var arr1224 = [1,2,87,87,87,2,1];
// console.log(candy([1,2,87,87,87,2,1]),13);
// console.log(candy([1,2,3,5,4,3,2,1]),21)

/**  分发饼干
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var gson = {}
    for(var i = 0 ; i < g.length ; i++){
        if(gson[g[i]]){
            gson[g[i]] = gson[g[i]]++;
        }else{
            gson[g[i]] = 1
        }
    }
    s.sort((a,b)=>{return a-b})
    var child = 0
    for(var i = 0 ; i < s.length ; i++){
        for(var j = 0 ; j <= i ; j++){
            if(gson[s[i-j]]){
                child++;
                gson[s[i-j]]--;
                break;
            }
        }
    }
    return child
};
// var arr12251 = [1,2,3];
// var arr12252 = [1,2];
// findContentChildren(arr12251,arr12252)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**  回文链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head == null || head.next == null) {
        return true;
    }
    var slow = head, fast = head;
    var pre = head, prepre = null;
    while(fast != null && fast.next != null) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
        pre.next = prepre;
        prepre = pre;
    }
    if(fast != null) {
        slow = slow.next;
    }
    while(pre != null && slow != null) {
        if(pre.val != slow.val) {
            return false;
        }
        pre = pre.next;
        slow = slow.next;
    }
    return true;
}
var ListNode12251 = creteLis([1,2,3,2,1]);
var ListNode12252 = creteLis([1,2]);
// isPalindrome(ListNode1225)
/** 种花问题
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var count = 0;
    for(var i = 0 ; i < flowerbed.length ; i++){
        if(flowerbed[i] == 0){  
            if(flowerbed[i-1] == 0 && flowerbed[i+1] == 0 ){
                flowerbed[i] =1
                count++
            }
            if(i==0 && flowerbed[i+1] == 0){
                flowerbed[i] =1
                count++
            }
            if(i==flowerbed.length-1 && flowerbed[i-1] ==0){
                flowerbed[i] =1
                count++
            }
        }
        if(count>=n){
            return true
        }
    }
    return false
};
// var arr1226 = [1,0,0,0,1];
// var arr1226 = [1,0,1,0,1,0,1];
var arr1226 = [1,0,0,0,1,0,0];
// canPlaceFlowers(arr1226,1);
/**买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var dp=[]
    dp[0]=-prices[0] //卖出的利益
    dp[1]=prices[0] //当前持有股票
    for(var i = 1 ; i < prices.length ; i++){
        dp[0] = Math.max(dp[0],prices[i]-dp[1])
        dp[1] = Math.min(dp[1],prices[i])
    }
    return dp[0]
};
var arr1229 = [7,1,5,3,6,4]
// maxProfit(arr1229)
/**打家劫舍
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 0 ){
        return 0
    }
    if(nums.length == 1){
        return nums[0]
    }
    var dp=new Array(nums.length)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    for(var i = 2 ; i < nums.length ; i++){
        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
    }
    return dp[nums.length-1]
};
/**使用最小花费爬楼梯
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var dp = new Array(cost.length);
    dp[0]=cost[0]
    dp[1]=cost[1]
    for(var i = 2 ; i < cost.length+1 ; i++){
        if(i==cost.length){
            return Math.min(dp[i-2],dp[i-1])
        }
        dp[i]=Math.min(dp[i-2]+cost[i],dp[i-1]+cost[i])
    }
};
var arr12291=[0,0,0,0,0,0]
minCostClimbingStairs(arr12291);
function as(){}