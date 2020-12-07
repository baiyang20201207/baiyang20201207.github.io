/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    var i = 0,left = 0 ,right = 0;
    var ks = '',rs = '',num = 0,size = 0;
	var str = '';
    while(num<key.length){
        if(ring[left] == key[num]){
            size ++;
            num++;
            right = left;
            str=str + ring[left];
			console.log('left++'+str);
            if(num == key.length){
                return size;
            }
            continue;
        }
        if(ring[right] == key[num]){
            size++;
            num++;
            left = right;
            str= str + ring[right];
			console.log('right++'+str);
            if(num == key.length){
                return size;
            }
            continue;
        }
        if(left - 1 >= 0){
            left = left-1;
        }else{
            left = ring.length-1;
        }
        if(right + 1 <= ring.length-1){
            right = right+1;
        }else{
            right = 0;
        }
		console.log('转轮转动++');
        size++;
    }
};
/*
var str11111 = "edcba";
var str11112 = "abcde";

/*
"iotfo"
"fioot"
*/

var str11111 = "iotfo";
var str11112 = "fioot";
//findRotateSteps(str11111,str11112)




function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
 function creteLis(arr){
	 var head = null,root,next;
	 for(var i = 0 ; i < arr.length ; i++){
		root = new ListNode(arr[i]);
		if(head == null){
			head = root;
			next = head;
			continue;
		}
		next.next = root;
		next = root;
	 }	 
	 return head;
 }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head == null){
        return head;
    }
    var dan = head;
    var even = head.next;
    var headt = even;
    while(even != null && even.next != null){
        dan.next = even.next;
        dan = dan.next;
        even.next = dan.next;
        even = even.next;
    }
    dan.next =headt;
    return headt;
};
var ListNode1113 = creteLis([1,2,3,4,5]);
//oddEvenList(ListNode1113);

var removeNthFromEnd = function(head, n) {
 /*   var fir = head ,sec =head;
    while(fir!=null){
       fir = fir.next;
       if(n >= 0 ){
           n--
       } else{
           sec =sec.next;
       }
    }
    if(sec.next!== null && sec.next.next !== null){
        sec.next = sec.next.next;
    }else{
        sec.next = null;
    }
    return head;*/
	
    var fir = head ,sec =head.next,num = 0;
	while(sec !== null){
		sec = sec.next
		if(num == n){
			fir = fir.next
		}else{
			num ++;
		}
	}
	if(num < n){//没有走完就结尾了,代表n为fir
		if(n == 1){
			return null;
		}
		fir.val = fir.next.val; //覆盖fir
		fir.next = fir.next.next;
	}else{
		fir.next = fir.next.next; //覆盖下一个节点

	}
	return head;
};
var ListNode1114 = creteLis([1]);
//removeNthFromEnd(ListNode1114,1)


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    var num = 0,tep = 0;
    for(var i = 0 ; i < arr2.length ; i++){
        for(var j = num ; j < arr1.length ; j++){
            if(arr1[j] == arr2[i]){
                tep = arr1[num];
                arr1[num] = arr1[j];
                arr1[j] = tep;
                num++
            }
        }
    }
    for(var i = num; i < arr1.length ; i++){
        for(var j = i+1 ; j < arr1.length ; j++){
            if(arr1[i] > arr1[j]){
                tep = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = tep;
            }
        }
    }
    return arr1;
}; 

var arr11141 = [2,3,1,3,2,4,6,7,9,2,19];
var arr11142 = [2,1,4,3,9,6];
var arr11143 = [28,6,22,8,44,17]
var arr11144 = [22,28,8,6]
//relativeSortArray(arr11143,arr11144);


/**  翻转链表的迭代版本
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null){
        return null;
    }
    var last = null,tep; //上一个链表
    while(head !== null){
		tep =head;
		head = head.next;
		tep.next = last;
		last = tep;
	
    }
    return tep;
};

/**  翻转链表的递归版本
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	if(head == null || head.next == null){
		return head;
	}
	var p = reverseList(head.next);  //递归到最后，找到最后的头结点
	head.next.next = head;
	head.next = null;
	return p;
	
};

/**  翻转链表的递归版本
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	var fir = head,sec =head.next;
    while(sec != null){
        sec.next = fir;
        fir = sec;
        sec = sec.next;
    }
	head.next = null
    return sec;
};
//reverseList(ListNode1114);

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var nums = digun(root,1);
    return nums;
    function digun(root,num){
        var left = num,right =num;
        if(root.left!=null){
            left = digun(root.left,num+1);
        }
        if(root.right!=null){
            right = digun(root.right,num+1);
        }
        var max = left>right?left:right;
        return max;
    }
};
//1116[3,9,20,null,null,15,7]
var DoubleTree1116 = new TreeNode(5);
DoubleTree1116.left = new TreeNode(4);
DoubleTree1116.right = new TreeNode(8);
DoubleTree1116.left.left = new TreeNode(11);
DoubleTree1116.left.right = new TreeNode(null);
DoubleTree1116.right.left = new TreeNode(13);
DoubleTree1116.right.right = new TreeNode(4);
DoubleTree1116.left.left.left = new TreeNode(7);
DoubleTree1116.left.left.right = new TreeNode(2);
/*
maxDepth(DoubleTree1116);
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(root==null){
        return true;
    }
	var a = new Array();
    digun(root)
    function digun(root){
		if(root.left !== null){
			digun(root.left);
		}
		a.push(root.val);
		if(root.right !==null){
			digun(root.right);
		}
    }
	console.log(a);
	for(var i = 0;i<a.length;i++){
		if(a[i]<=a[i-1]){
			return false;
		}
	}
	return true;
};

//isValidBST(DoubleTree1116);
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
	function digun(left,right){
		if(left.val == right.val){
            if(left.left !== null && right.right!==null){
                digun(left.left,right.right);
            }else{
				if(left.left !== null || right.right !==null){
					return false
				}
            }
            if(left.right !==null && right.left !== null){
                digun(left.right,right.left)
            }else{
				if(left.right !==null || right.right!=null){
					console.log("3");
					return false
				}
            }
        }else{
            console.log("2");
            return false
        }
        return true
    }
    if(root==null){
        return true
    }
	if(root.left!==null&&root.right!==null ){
		return digun(root.left,root.right);
    }else{
		if(root.left==null && root.right==null ){
            return true
        }
        return false
	}

};


var isSymmetric1 = function(root) {
	function dfs( left,  right) {
		//递归的终止条件是两个节点都为空
		//或者两个节点中有一个为空
		//或者两个节点的值不相等
		if(left==null && right==null) {
			return true;
		}
		if(left==null || right==null) {
			return false;
		}
		if(left.val!=right.val) {
			return false;
		}
		//再递归的比较 左节点的左孩子 和 右节点的右孩子
		//以及比较  左节点的右孩子 和 右节点的左孩子
		return dfs(left.left,right.right) && dfs(left.right,right.left);
	}

	if(root==null) {
		return true;
	}
	//调用递归函数，比较左节点，右节点
	return dfs(root.left,root.right);

};

//isSymmetric(DoubleTree1116)


/**   移动零 --双循环暴力破解
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var tep=0;
    for(var i = 0 ;i<nums.length-1;i++){
        for(var j = 0 ; j<nums.length-1;j++){
            if(nums[j]==0){
                tep = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = tep;
            }
        }
    }
    
};

/** 双指针写法
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function(nums) {
    var fir = 0,sec = 0,num = 0,tep;
    while(fir<nums.length){
		
        if(sec>nums.length-1){
            nums[fir] = 0;
			fir++;
			continue
        }
        if(nums[sec] == 0){
            num++;
        }else{
			if(fir == sec){
				fir++
			}else{
				nums[fir] = nums[sec]
				fir++
			}
		}
        sec++
    }
};


//moveZeroes1([1,0,1,0,3,12]);


/** 二叉树的层序遍历
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
var levelOrder = function(root) {
    var duilie = new Array();
	var node,res = new Array(),arr,num;
	duilie.push(root);
	while(duilie.length!=0){
		arr = new Array();
		num = duilie.length;
		for(var i = 0 ; i < num ; i++){
			node = duilie[0];
			duilie.shift();
			arr.push(node.val)
			if(node.left !== null){
				duilie.push(node.left);
			}
			if(node.right!==null){
				duilie.push(node.right);
			}
		}
		res.push(arr);
	}
	return res;
};
//levelOrder(DoubleTree1116);

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var maxM= nums1.length-n-1,maxN = nums2.length-1;
    var num = nums1.length-1;
    while( maxN >= 0){
        if(nums1[maxM] > nums2[maxN]){
            nums1[num] = nums1[maxM]
            maxM--;
        }else{
            nums1[num] = nums2[maxN];
            maxN--;
        }
        num--
    }
	console.log(nums1);
};
merge(
[1,2,3,0,0,0],
3,
[2,5,6],
3)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return maxdigun(root,1)
    function maxdigun(root,dept){
        if(root==null){
            return 0
        }
        var left = dept,right = dept;
        if(root.left !== null){
            left = maxdigun(root.left,left+1);
        }
        if(root.right !==null){
            right = maxdigun(root.right,right+1)
        }
        return left>right?left:right;
    }
};

//maxDepth(DoubleTree1116);

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root == null){
        return null
    }
    return digun(root,0,sum)
    function digun(root,num,sum){
        var left = num+root.val,right =num+root.val,bolleft =false,bolright = false
		if(false){
			if(root.left!==null){
				bolleft = digun(root.left,left,sum);
			}
			if(root.right!==null){
				bolright = digun(root.right,right,sum);
			}
			return bolleft || bolright;
		}else{
			
		}

    }
};
var DoubleTree1121 = new TreeNode(1);
//DoubleTree1121.left = new TreeNode(2);
//hasPathSum(DoubleTree1116,13)


/**    对链表进行插入排序
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    var nexthead = head.next,returnhead= head,forhead,tep;
    while(nexthead!=null){
        if(head.val>nexthead.val){
            head.next = nexthead.next;
            forhead = returnhead;
            while(forhead.val < nexthead.val){
                forhead = forhead.next;
            }
			if(forhead.val == head.val){
				nexthead.next = forhead;//成功换位
				returnhead = nexthead;
				nexthead = head.next;
			}else{
				tep = nexthead;
				nexthead = forhead.next;
				forhead.next = tep;
			}
        }else{
			head=nexthead;
			nexthead = nexthead.next;
        }
    }
    return returnhead;
};

//insertionSortList(creteLis([4,2,1,3]))

/** 排序列表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
	if(head == null){
		return null;
	}
    var nexthead = head.next,forhead = head,returnhead = head,tep;
    while(nexthead !== null){
        if(head.val > nexthead.val){
            head.next = nexthead.next; //先把nexthead的下一链表拿出来
            forhead = returnhead;
            while(forhead.val < nexthead.val){
                tep = forhead;
                forhead = forhead.next
            }
        
            if(forhead == returnhead){
                returnhead = nexthead;
                nexthead.next = forhead;
            }else{
                tep.next = nexthead;
                nexthead.next = forhead;
            }
			if(head.next == null){
				break;
			}
			nexthead = head.next;
        }else{
			
			
			head = head.next;
			nexthead = head.next;
		}	
		
    }
    return returnhead;
};

//sortList(creteLis([4,2,1,3]));

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //用栈的思想解决 先进后出；
    var zanlist = new Array();
    if(s.length %2 !=0){
        return false;
    }
    for(var i = 0 ; i < s.length ; i++){
        var num = s[i].charCodeAt();
        var j = zanlist.length;
        if(j== 0){zanlist.push(num);continue;}
        if(zanlist[j-1]-num == -2 || zanlist[j-1] -num == -1){
            zanlist.pop();
        }else{
            zanlist.push(num);
        }

    }
    return zanlist.length == 0;
};
//isValid('{}');

/** 缺失数字
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var num = 0;
    for(var i = 0 ; i < nums.length ; i++){
        num += i;
        num -= nums[i];
    }
	num += nums.length;
    return num
};

var arr1123 = [3,0,1];
//missingNumber(arr1123);

/** 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    var left = 0,right = nums.length;
	while(left <= right){
	var mid = parseInt(left /2 + right /2);
		if(mid > nums.length-1){
			return -1;
		}
		if(nums[mid] > target){
			right = mid -1
		}else if(nums[mid] < target){
			left = mid + 1;
		}else if( nums[mid] == target ){
			return mid
		}
	}
    return -1
};
var arr1124 = [-1,0,3,5,9,12]
var num1124 = 2
//search(arr1124,num1124);

/** x的平方根
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var left = 0,right = x,ans = -1;
    while(left <= right){
        mid = parseInt((left+right)/2);
        if( mid * mid <= x){
			ans = mid;
			left = mid + 1;
		}else{
			right = mid -1;
		}
    }
	return ans;
};
//mySqrt(16);

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
var guess = function(num) {
	if(num == guessNum){
		return 0;
	}else if(num > guessNum){
		return 1
	}else if(num < guessNum){
		return -1
	}
}
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    var left = 0 , right = n , mid =0 ,num;
    while(left <= right){
        mid = parseInt((right+left)/2);
        num = guess(mid);
        if(num == -1){
            //mid 数字小了
            left = mid + 1;
        }else if(num == 1){
            //mid 数字大了
            right = mid -1;
        }
        else if(num == 0){
            return mid;
        }
    }
};
//guessNum = 6;
//guessNumber(10);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search1 = function(nums, target) {
    var xz = 0 ;
    for(var i = 0 ; i < nums.length ;i++){
        if(nums[i] - nums[i-1]<0){
            xz = i;
			break
        }
    }
    var left = 0,right = nums.length-1, mid = 0,ans = 0;
    while(left <= right){
        mid = left+((right-left)>>1);
        if(mid+xz >= nums.length){
            ans = mid+xz - nums.length;
        }else{
            ans = mid+xz;
        }
        if(nums[ans] == target){
            return ans
        }else if(nums[ans] > target){
            right = mid -1;
        }else if(nums[ans]<target){
            left = mid + 1;
        }
    }
    return -1;
};

//search1([4,5,6,7,0,1,2],
//0)

/** 具有给定数值的最小字符串
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    var size = Math.floor((k-n)/26),ann = '',yu= k-(size*26)-(n-size),num = 0;
    if(size == n){
        for(var i=0;i<n;i++){
            ann+='z'
        }
    } else if(size == 0 && yu == n){
        for(var i=0;i<n;i++){
            ann+='a'
        }
    }else {
        var len = n-size-1;
        for(var i = 0;i<n;i++){
            if(i<len){
                ann+='a'
                continue
            }
            if(i==len){
                num = 97 + yu;
                ann+= String.fromCharCode(num)
                continue
            }
            ann+='z';
        }
         }
    return ann
};
//getSmallestString(3,27);

/** 第一个错误版本
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1,right = n,bol,mid,lastfalse =0;
        while(left<right){
            mid = left+((right-left)>>1);
            bol = isBadVersion(mid);
            if(bol){
                if(lastfalse + 1 ==mid){
                    return mid;
                }
                right = mid;
            }else{
                lastfalse = mid;
                left = mid+1;
            }
        }
		return lastfalse+1;
    };
};
var arr1127 = [false,false,false,false,true,true,true]
function isBadVersion1(num){
	return arr1127[num-1];
}
//var fun1127 = solution(isBadVersion1);

/** 寻找峰值
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var left = 0 ,right = nums.length -1,mid,asc = true;
    while(left < right){
        mid = left +((right - left)>>1);
        if(nums[mid]>nums[mid+1]){// 
            right = mid;
        }else{ // 
            left = mid + 1;
        }
    }
        return left;
};
var arr1128 = [1,2,3,1];
findPeakElement(arr1128)

/** 寻找旋转排序数组中的最小值
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left = 0 , right = nums.length - 1;
    while(left < right){
         if (nums[left] <= nums[right]) { // 如果 [left,right] 递增，直接返回
            return nums[left]
        }
        mid = left + ((right-left)>>1);
        if(nums[mid] >= nums[left] ){
            left = mid +1;
        }else{
            right = mid;
        }
    }
    return nums[left]
};
var arr11281 =  [3,4,5,1,2];
var arr11282 = [4,5,6,7,0,1,2];
//findMin(arr11282);

/**  在排序数组中查找元素的第一个和最后一个位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var releft = searchleft(nums,target);
    var reright = searchright(nums,target);
	if(releft == -1 ){
		return [-1,-1]
	}
    if(releft == reright){
        return [releft]
    }else{
        return [releft,reright]
    }
    function searchleft(nums,target){
        var lleft = 0, lright = nums.length,lmid,ans = false;
        while(lleft < lright){
            lmid = lleft + ((lright - lleft)>>1);
            if(nums[lmid] == target){
				ans = true;
                lright = lmid;
            }else if(nums[lmid] > target){
                lright = lmid;
            }else if(nums[lmid] < target){
                lleft = lmid +1;
            }
        }
        return ans?lleft:-1;
    }
    function searchright(nums,target){
        var rleft = 0 , rright = nums.length,rmid,ans = false;
        while(rleft < rright){
			rmid = rleft + ((rright - rleft)>>1)
            if(nums[rmid] > target){
                rright = rmid
            }else if(nums[rmid] < target){
                rleft = rmid +1;
            }else if(nums[rmid] == target){
				ans = true
                rleft = rmid +1;
            }
        }
        return ans?rleft-1:-1;
    }
};

var arr11283 = [5,7,7,8,8,10];
var arr11284 = [1];
var arr11285 = [1,4];
//searchRange(arr11283,8);

/**  找到 K 个最接近的元素
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    function search(arr,x){
        var left = 0,right = arr.length-1,mid,ans =-1;
        while(left <= right){
            mid = left + ((right - left) >> 1)
            if(arr[mid] == x){
                ans =  mid
            }else if(arr[mid] > x){
                right = mid - 1;
            }else if(arr[mid] < x){
                left = mid + 1;
            }
        }
        return [ans,left,right];
    }
    var rearr = [];
    var target = search(arr,x);
	if(target[0] !== -1){
		rearr.push(arr[target])
		var up = target + 1,low = target - 1;
	}else{
		up = target[1];
		low = target[2];
	}
    while(!(rearr.length == k)){
        if(up<arr.length && low >= 0){
            if(Math.abs(arr[up] -x) < Math.abs(arr[low] - x)){
                rearr.push(arr[up])
                up = up+1;
            }else if(Math.abs(arr[up] -x) > Math.abs(arr[low] - x)){
                rearr.push(arr[low]);
                low = low -1;
            }else if(Math.abs(arr[up] -x) == Math.abs(arr[low] - x)){
                if(up<low){
                    rearr.push(arr[up])
                    up = up+1;
                }else{
                    rearr.push(arr[low]);
                    low = low -1;  
                }
            }
        }else if(up >= arr.length){
                    rearr.push(arr[low]);
                    low = low -1;  
        }else if(low < 0){
                    rearr.push(arr[up])
                    up = up+1;
        }
    }
    rearr.sort((a,b)=>{return a-b})
    return rearr;
}
//findClosestElements([1,1,1,10,10,10],1,9)
//findClosestElements([1,2,3,4,5],4,3);

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var num = 1;
    for(var i = 0;i<Math.abs(n);i++){
        if(n>0){
            num = num*x;
        }else{
            num = num/x;
        }
    }
    return num;
};

//myPow(2.00000,10)

/**  完全平方数
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var left = 0 ,right = num , mid ,ans;
    while(left <= right){
        mid = left + ((right - left) >>1);
		ans = mid * mid;
        if(ans == num){
            return true;
        }else if(ans > num){
            right = mid -1;
        }else if(ans < num){
            left = mid +1
        }
    }
    return false;
};




/** 岛屿数量
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	var islans = 0,island = 0;
    for(var i = 0 ; i < grid.length ; i++){
        for(var j =0 ; j < grid[i].length ; j++){
            if(grid[i][j] == 1){
				island = grid[i][j];
				islans++;
                BFS([j,i]);
            }
        }
    }
	return islans;
    function BFS(node){
        var duilie = [],num,x,y;
        duilie.push(node);
        while(!(duilie.length == 0)){
            num = duilie.length;
            for(var i = 0 ; i < num ; i++){
                x = duilie[0][0],y = duilie[0][1];
				if(grid[y][x] == 2){duilie.shift();continue}
                grid[y][x] = 2;//做标记，标记已遍历的岛屿
				if(y - 1 >= 0 && grid[y - 1][x] == 1){duilie.push([x,y-1])}
				if(x - 1 >= 0 && grid[y][x -1 ] == 1){duilie.push([x-1,y])}
				if(y + 1<grid.length && grid[y + 1][x] == 1){duilie.push([x,y+1])}
				if(x + 1<grid[y].length && grid[y][x + 1] == 1){duilie.push([x+1,y])}
                duilie.shift();
            }
        }
    }
};
var grid1201 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
//numIslands(grid1201)
