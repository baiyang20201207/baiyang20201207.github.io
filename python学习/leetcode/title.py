# class Solution: #买卖股票的最佳时机
#     import Math
#     def maxProfit(self, prices: List[int]) -> int:
#         tep=len(prices)
#         dp=[]
#         dp[0]=0
#         dp[1]=prices[0]
#         for i in range(1,tep):
#             if dp[0]<prices[i]-dp[1]:
#                 dp[0]=prices[i]-dp[1]
#             if dp[1]>prices[i]:
#                 dp[1]=prices[i]
        
class Solution: #使用最小花费爬楼梯
    def minCostClimbingStairs(self, cost) -> int:
        size = len(cost)
        arr = [0]*size
        arr[0] = cost[0]
        arr[1] = cost[1]
        for i in range(2,size+1):
            if i == size:
                return min(arr[i-2],arr[i-1])
            arr[i]=min(arr[i-2]+cost[i],arr[i-1]+cost[i])
    def maxSubArray(self, nums) -> int:#连续子数组的最大和
        size = len(nums)
        dp = [0] * size
        dp[0] = nums[0]
        maxnum=dp[0] #连续最大值
        for i in range(1, size):
            dp[i] = max(dp[i - 1] + nums[i], 0) 
            dp[i] = max(dp[i-1]+nums[i],nums[i])
            maxnum=max(dp[i],maxnum)
        return maxnum
        # class Solution: #无重叠区间
    def eraseOverlapIntervals(self, intervals) -> int:
        intervals.sort(key=self.softpaixu)
        renum,size=0,len(intervals)
        if size == 0:
            return 0
        last=intervals[0]
        for i in range(1,size):
            if last[1] > intervals[i][0]:
                renum+=1
            else:
                last = intervals[i]
        return renum
    def softpaixu(self,elem):
        return elem[1]
    def climbStairs(self, n) -> int: #爬楼梯迭代
        arr = []
        for i in range(1,n+1):
            if i == 1:
                arr.append(1)
            if i == 2 :
                 arr.append(2)
            if i>=2:
                print(arr,end=' ')
                print(arr[i-1],arr[i-2],n,i,i-1,i-2)
                num=arr[i-2]+arr[i-1]
                arr.append(num)
        return arr[n-1]
    def climbStairs1(self,n):#爬楼梯递归
so=Solution()
print(so.climbStairs(5))
# print(so.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
class NumArray:#区域和检索 - 数组不可变
    def __init__(self, nums):
        self.arr=[]
        for i in range(len(nums)):
            if i==0: self.arr.append(nums[i])
            else:
                self.arr.append(self.arr[i-1]+nums[i])

    def sumRange(self, i, j) -> int:
        if i==0:
            return self.arr[j]
        else:return self.arr[j]-self.arr[i-1]

# num = NumArray([-2, 0, 3, -5, 2, -1])
# print(num.sumRange(0,2))
# print(num.sumRange(2,5))
# print(num.sumRange(0,5))qwertyyuiiopasddfghjklzxcvbnm 


