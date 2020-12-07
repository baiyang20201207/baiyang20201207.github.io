/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    var dead = new Array(10000).fill(0);
    for(var i = 0 ; i < deadends.length ; i++){
        if(parseInt(deadends[i]) == 0){
            return -1;
        }
        dead[parseInt(deadends[i])]= 1;
    }
    dead[parseInt(target)] = 9;
    var duilie = [[0,0]];
    var returnN = BFS(duilie);
    return returnN;
    function BFS(arr){
        var num = 0,renum = -1,num1 = 0;
        while(!arr.length==0){
            num = arr.length;
            for(var i = 0; i < num ; i++){
                dead[arr[0][0]] = 2; //标注已经转过的位置
                num1 = 0;
                for(var j = 0 ; j < 8 ; j++){
                    if(j%2 == 0){
                        if(num1 == 0){
                            num1 = 1;
                        }else{
                            num1 = num1 * 10;
                        }
                        num1 = num1 * -1;
                    }else{
                        num1 = num1 * -1;
                    }
                    rename = number(arr[0][0],num1,dead,arr[0][1],arr);
                    if(rename != -1){
                        return rename;
                    }
                }
                arr.shift();
            }
        }
        return -1;
    }
    function number(nums,num,deadarr,step,duilie){
        var size = Math.abs(num);
        var tep = parseInt(nums/size).toString();
        tep = tep[tep.length-1];
        if(num > 0){
            if(tep == 9){
                nums = nums - num * 9; 
            }else{
                nums = nums + num;
            }
        }else{
            if(tep == 0){
                nums = nums - num * 9;
            }else{
                nums = nums + num;
            }
        }
        if(deadarr[nums] == 9){
            return step+1;
        }
        if(deadarr[nums] == 0){
            deadarr[nums] = 3;
            duilie.push([nums,step+1])
        }
        return -1;
    }
}

// var arr1201 = ["0201","0101","0102","1212","2002"]
// var str1201 = "0202";
var arr1201 =["8887","8889","8878","8898","8788","8988","7888","9888"]
var str1201 ="8888"
//openLock(arr1201,str1201);


/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var max = 0 ,arr = new Array(n).fill(0);
    arr[0] = "";
    for(var i = 1 ; i <= n+1 ; i++){
        if(i*i>n){
            max = i;
            break;
        }
    }
    var duilie = [0] , num ,tep,yu,str;
    while(!duilie.length == 0){
        num = duilie.length;
        for(var i = 0 ; i < num ; i++){
            for(var j = max - 1 ;j>0;j--){
                tep = duilie[0]; //队列目前总数
                yu = n -tep;//目标达成的数
                str = arr[tep];
                if(j*j < yu){
                    if(arr[tep+j*j] == 0){
                        arr[tep+j*j] = ","+str+j;
                        duilie.push(tep+j*j);
                    }
                }else if (j*j == yu){
                    var reStr = ","+str +j;
                    console.log(reStr);
                    return reStr.split(",").length -1;
                }
            }
            duilie.shift();
        }
    }
};

/**  最小栈
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
    this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.min = x;
    this.arr.push(x);
    this.length ++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
    this.length --;
    this.min = this.arr[this.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

    for(var i = 0 ; i< this.length ; i++){
        if(this.min > this.arr[i]){
            this.min = this.arr[i]
        }
    }
    return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   
// minStack.pop();
// minStack.top();      
// minStack.getMin();   

/** 天气变化
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    var zanarr = [],top;
    var rearr = new Array(T.length).fill(0);
    for(var i = 0; i < T.length ;i++){
        while(zanarr.length!=0 && zanarr[zanarr.length-1][1]< T[i]){
            top = zanarr[zanarr.length-1];
            rearr[top[0]] = i - top[0];
            zanarr.pop();
        }
        zanarr.push([i,T[i]]);
    }
    return rearr;
};
var arr1202 = [73,74,75,71,69,72,76,73];

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var zanarr = [],str,num1,num2,num3;
    for(var i = 0 ; i < tokens.length ; i++){ //0 == 48 
        str = tokens[i].charCodeAt();
        if(str>=48 || tokens[i].length !=1){
            zanarr.push(tokens[i]);
        }else{
            num1 = parseInt(zanarr[zanarr.length-1]);
            zanarr.pop();
            num2 = parseInt(zanarr[zanarr.length -1]);
            zanarr.pop();
            switch(str){
                case 42: //*
                num3 = num2*num1;
                break;
                case 43: //+
                num3 = num2+num1;
                break;
                case 45: //-
                num3 = num2 - num1;
                break;
                case 47: ///
                num3 = num2/num1;
                break;
            }
            console.log(num2+"="+num1+"="+Math.ceil(num3))
            zanarr.push(Math.round(num3))
        }
    }
    return zanarr[0];
};

var arr120201 = ["2","1","+","3","*"];
arr120201 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
arr120201 = ["-8","23","8","-","9","23","-","-","*","33","-8","/","+","38","-14",
"-","-","-7","32","-19","-","11","+","+","+","14","22","-","-","27","-9","-","+",
"31","+","-12","-11","-","-","14","+","30","+","37","30","-","+","-9","+","7","-",
"37","+","-5","13","/","-","19","-2","-19","12","+","-","23","+","-","-19","-","+",
"6","+","-17","+","17","+","5","36","+","-10","+","+","23","-8","-","-","18","-","31",
"-16","-","+","34","+","-6","+","24","-","22","-","-8","-","28","+","-12","+","39",
"28","-7","+","+","-14","5","+","5","+","10","+","+","+","-18","*","10","+","-5",
"11","-","6","+","-","-12","31","+","+","30","29","-","-","39","+","13","-8","-5",
"+","-","26","19","-","*","-","10","-","-20","5","+","+","0","-","28","-","19","/",
"28","+","-18","-","28","20","+","-5","-19","+","+","-","-12","-","3","-","6","-15",
"+","4","-","-","38","+","-9","-","38","-","12","-20","-","10","5","-15","-","-",
"-","+","-11","+","5","+","2","-","28","+","-9","-11","-","+","37","-","-17","31",
"-","2","+","+","-16","-12","-","-","12","+","34","-","15","+","8","+","17","-",
"2","-","33","+","-5","+","14","+","29","-","33","23","+","26","30","-","+","+",
"39","+","9","24","-","-","20","15","+","-","24","+","37","-","30","-1","-","+",
"34","+","-13","-","23","15","-","-","-5","-8","8","30","35","-9","22","+","-",
"-","36","-1","+","5","-","-","+","25","-","+","27","-","16","+","+","+","39",
"-","15","-","-3","+","5","-6","-","+","-6","-15","-7","-","+","/","13","-","18",
"+","4","+","29","+","-17","0","-6","-20","-17","+","12","-","+","-","+","+","-10",
"22","+","+","-11","-","-2","38","-","-","-6","+","0","-","-10","+","-4","-10","+",
"-","0","-","31","30","-","37","5","+","+","+","-15","+","38","4","-","-16","-17",
"+","+","+","38","-","27","-19","/","12","+","/"];
//evalRPN(arr120201);

/** DFS岛屿数量
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands1 = function(grid) {
	var islans = 0,island = 0;
    var zanarr =[];
    for(var i = 0 ; i < grid.length ; i++){
        for(var j =0 ; j < grid[i].length ; j++){
            if(grid[i][j] == 1){
				island = grid[i][j];
                islans++;
                zanarr.push([i,j])
                DFS([i,j]);
            }
        }
    }
    return islans;
    function DFS(node){
        // var duilie = [],num,x,y;
        // duilie.push(node);
        // while(!(duilie.length == 0)){
        //     num = duilie.length;
        //     for(var i = 0 ; i < num ; i++){
        //         x = duilie[0][0],y = duilie[0][1];
		// 		if(grid[y][x] == 2){duilie.shift();continue}
        //         grid[y][x] = 2;//做标记，标记已遍历的岛屿
		// 		if(y - 1 >= 0 && grid[y - 1][x] == 1){duilie.push([x,y-1])}
		// 		if(x - 1 >= 0 && grid[y][x -1 ] == 1){duilie.push([x-1,y])}
		// 		if(y + 1<grid.length && grid[y + 1][x] == 1){duilie.push([x,y+1])}
		// 		if(x + 1<grid[y].length && grid[y][x + 1] == 1){duilie.push([x+1,y])}
        //         duilie.shift();
        //     }
        // }
        var y = node[0],x=node[1];
        grid[y][x] = 2;
        zanarr.pop();
        if(y - 1 >= 0 && grid[y - 1][x] == 1){zanarr.push([x,y-1]);DFS([y-1,x])}
        if(x - 1 >= 0 && grid[y][x -1 ] == 1){zanarr.push([x-1,y]);DFS([y,x-1])}
        if(y + 1<grid.length && grid[y + 1][x] == 1){zanarr.push([x,y+1]);DFS([y+1,x])}
        if(x + 1<grid[y].length && grid[y][x + 1] == 1){zanarr.push([x+1,y]);DFS([y,x+1])}
    }
};
var grid120203 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
//numIslands1(grid120203);

/** 质数数量
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var i = 2 , j;
    var rearr = [];
    while(i<n){
        if(i==2){
            rearr.push(i);
            i++;
            continue;
        }
        j = 0;
        while(j <= rearr.length){
            if(j == rearr.length){
                rearr.push(i);
                break;
            }else if(i % rearr[j] ==0){
                break;
            }
            j++;
        }
        i++;
    }
    console.log(rearr);
};

/**  目标和
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    var count = 0;
    Fdigun(nums,0,0,S);
    return count;
    function Fdigun(nums,i,sum,S){
        //nums 数组，i 数组遍历的下标位置， sum 总和，S 目标值
        if(i == nums.length){
            if(sum == S){
                count ++;
            }
        }else{
            Fdigun(nums,i+1,sum + nums[i],S);
            Fdigun(nums,i+1,sum - nums[i],S);
        }
    }
};

var arr12003 =[1,1,1,1,1]
var num1203 = 3;
//findTargetSumWays(arr12003,num1203);


  // Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};
var node1203 = new Node(1,[2,4])

/**克隆图
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    var clonejson ={};
    return clonedigun(node)
    function clonedigun(node){
        if(node == null){
            return node;
        }
        if(clonejson[node.val]){
            return clonejson[node.val];
        }
        var newnode = new Node(node.val,new Array());
        clonejson[node.val] = node;
        for(var i = 0 ; i < node.neighbors.length;i++){
            newnode.neighbors.push(clonedigun(node.neighbors[i]))
        }
        return newnode;
    }
};

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.arr1=new Array();
    this.arr2=new Array();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(this.arr1.length == 0){
        this.front = x;
    }
    this.arr1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.arr2.length == 0){
        while(this.arr1.length != 0){
            this.arr2.push(this.arr1.pop())
        }
    }
    return this.arr2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.arr2.length !==0){
        return this.arr2[0]
    }
    return this.front;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.arr1.length == 0 && this.arr2.length == 0;
};
// //["MyQueue","push","push","peek","pop","empty"]
// var myQueue = new MyQueue();
// myQueue.push(1);
// myQueue.push(2);
// myQueue.peek();
// myQueue.pop();
// myQueue.empty();
// //["MyQueue","push","push","push","push","pop","push","pop","pop","pop","pop"]
// //[[],[1],[2],[3],[4],[],[5],[],[],[],[]]
// var myQueue1 = new MyQueue();
// myQueue1.push(1);
// myQueue1.push(2);
// myQueue1.push(3);
// myQueue1.push(4);
// myQueue1.pop();
// myQueue1.push(5);
// myQueue1.pop();
// myQueue1.pop();
// myQueue1.pop();
// myQueue1.pop();

/** 分割数组为连续子串
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    // var arr = new Array(nums.length+1).fill(0);
    // for(var i = 0 ; i < nums.length ; i++){
    //     arr[nums[i]]++;
    // }
    // var bol = true;
    // for(var i = 0 ; i < arr[1] ; i++){
    //     bol = digun(arr , 1+1 , 1 )
    // //    统计数组 栈长 栈顶元素 第几分叉
    //     if(!bol){
    //         return false
    //     }
    // }
    // return true;
    // function digun(list,len,size){
    //     var rebol = true;
    //     if(arr[size] == 0){
    //         return true
    //     }
    //     if(arr[size] > arr[size-1]){ //出现分叉
    //         for(var i = 0 ; i < arr[size] - arr[size - 1] ; i++){
                
    //         }
    //     }else if(arr[size] == arr[size-1]){//没有分叉

    //     }else if(arr[size] < arr[size-1]){//减少分叉

    //     }
    //     return rebol;
    // }
    //贪心算法
    var nc =new Array(nums[nums.length-1]+1).fill(0)//存储出现次数
    var tail = new Array(nums[nums.length-1]+1).fill(0)//记录已经连接的连续子串
    for(var i = 0 ; i < nums.length ; i++){
        nc[nums[i]]++
    }
    for(var key = 0 ; key < nc.length ; key++){
        if(nc[key]==0){
            continue;
        }else if(nc[key] > 0 && tail[key-1] > 0){
            nc[key]--;
            tail[key-1]--;
            tail[key]++;
            key--;
        }else if(nc[key] > 0 && nc[key+1] > 0 && nc[key+2] > 0){
            nc[key]--;
            nc[key+1]--;
            nc[key+2]--;
            tail[key+2]++;
            key--;
        }else{
            return false;
        }
    }
    return true;
    // function digun(list,len,size){
    //     var rebol = true;
    //     if(len >= list.length){
    //         return true;
    //     }
    //     if(arr[size] > arr[size-1]){ //出现分叉
    //         for(var i = 0 ; i < list[size] - list[size - 1] ; i++){
    //             if(i==0){
    //                 rebol =digun(list,len+1,size+1);
    //             }
    //             rebol =digun(list,1,size+1);
    //         }
    //     }else if(arr[size] == arr[size -1]){ //没有分叉
    //         rebol =digun(list,len+1,size+1);
    //     }else if(arr[size] < arr[size -1 ] && arr[size] != 0){ //分叉合一
    //         if(size < 3 ){
    //             list[size] --;
    //             if(size < 0){
    //                 return false;
    //             }
    //             rebol =digun(list,len+1,size++)
    //         }
    //     }
    //     return rebol;
    // }
};
var arr1204 = [1,2,3,3,4,4,5,5];
var arr1204 = [1,2,3,4,4,5]
var arr1204 = [1,2,3,4,6,7,8,9,10,11];
//isPossible(arr1204);


/** 寻找 中心索引
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sum = 0,left = 0;
    for(var i = 0 ; i < nums.length ; i++){
        sum = sum + nums[i];
    }
    for(var i = 0 ; i < nums.length ; i++){
        if(nums[i] + left == sum - left ){
            return i;
        }
        left = left + nums[i];
    }
    return -1
}

var arr120401 = [1, 7, 3, 6, 5, 6];
//pivotIndex(arr120401);

/** 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var left = 0 , right = nums.length -1,mid,ans = 0;
    while(left <= right){
        mid = left+((right - left)>>1)
        if( nums[mid] == target){
            return mid
        }else if( nums[mid] > target ){
            if(nums[left] > target){
                ans = left;
            }else{
                ans = right -1;
            }
            right = mid -1;
        }else if( nums[mid] < target ){
            if(nums[right] < target){
                ans = right + 1;
            }else{
                ans = left + 1;
            }
            left = mid + 1;
        }

    }
    return ans
};
var arr120402 = [1,3,4,6];
//searchInsert(arr120402,5)

/** 合并区间
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    var arr = new Array(intervals[intervals.length-1][1]+1).fill(0);
    var num = 0 ,len;
    for(var i = 0 ; i < intervals.length ; i ++){
        if( arr[intervals[i][0]] == 0){
            num = i +1;
        }else{
            num =  arr[intervals[i][0]]
        }
        len = intervals[i][1];
        for(var j = intervals[i][0] ; j <= len ; j++){
            if(j > intervals[i][1]){
                if(arr[j] !== 0 && j < arr.length){
                    len++
                    arr[j] = num;
                }
            }else{
                arr[j] = num;
            }
            if(j == intervals[i][1]){
                len++;
            }
        }
        num = 0;
    }
    var rearr = [];
    var newarr;
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] !== 0){
            if(arr[i-1] == 0 || i==0){
                newarr = new Array();
                rearr.push(newarr);
                newarr.push(i);
            }
            if(arr[i] !== arr[i+1] && arr[i+1] !== 0 && i<arr.length){
                newarr.push(i);
                newarr = new Array();
                if( i !== arr.length -1){
                    rearr.push(newarr);
                    newarr.push(i+1);
                }
                continue;
            }
            if(arr[i+1] == 0 || i+1 == arr.length){
                newarr.push(i);
            }
        }
    }
    return rearr;
};
var arr120403 =[[1,4],[5,6]];
var arr120403 =[[1,4],[0,6]];
var arr120403 = [[1,3],[2,6],[8,10],[15,18]];
//merge(arr120403);

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.startList = function(val){
        this.val = val;
        this.next = null;
    }
    this.listhead = new this.startList(null);
    this.listtail = this.listhead;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    var list = this.listhead;
    for(var i = 0 ; i <= index ; i++){
        if(i==index){
            return list.val;
        }else{
            list = list.next;
        }
    }
    return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var templist;
    templist = new this.startList(val);
    if(this.listhead.val == null){
        this.listhead = templist;
        this.listtail = templist;
    }else{
        templist.next = this.listhead;
        this.listhead = templist;
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var templist;
    templist = new this.startList(val);
    if(this.listhead.val == null){
        this.listhead = templist;
        this.listtail = templist;
    }else{
        this.listtail.next = templist;
        this.listtail = templist;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    var list = this.listhead;
    var templist = new this.startList(val),next;
    if(index < 0){
        templist.next = this.listhead;
        this.listhead = templist;
        return;
    }
    for(var i = 1 ; i <= index ; i++){
        if(i==index){
            if(list.next == null){
                list.next = templist;
                return
            }else{
                next = list.next;
                list.next = templist;
                templist.next = next;
                return;
            }
        }
        list = list.next;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    var list = this.listhead;
    for(var i = 1 ; i <= index ; i++){
        if(i == index){
            if(list.next == null){
                list.next = null;
            }else{
                var next = list.next.next;
                list.next = next;
            }
        }
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3
