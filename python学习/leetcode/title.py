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

so=Solution()
print(so.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))