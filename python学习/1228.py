# red=[str(i) for i in range(1,7)]
# blue=[str(j) for j in range(1,8)]
# a=("+",)
# # print(type(a))
# print(tuple(red)+a+tuple(blue))
# # c=red+af+blue
# # print(tuple(c))
# a={('a',):"asd"}
# print(a[('a',)])
# 100题练习
# 题目1：有 1、2、3、4 个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？
def title1():
    list1=[]
    for i in range(1,5):
        for j in range(1,5):
            for k in range(1,5):
                if i!=j and j!=k and i!=k:
                    list1.append(i*100+j*10+k)
    return list1
#题目：企业发放的奖金根据利润提成
def title2():
    num=int(input("请输入企业利润：（单位万元）"))*10000
    money=0
    
    money+=100000*0.1
    if num>100000:
        if num>200000:
            tep=100000*0.075
        else:
            tep=(num-100000)*0.075
        money+=tep
    if num>200000:
        if num>400000:
            tep=200000*0.05
        else:
            tep=(num-200000)*0.05
        money+=tep
    if num>400000:
        if num>600000:
            tep=200000*0.03
        else:
            tep=(num-400000)*0.03
        money+=tep
    if num>600000:
        if num>1000000:
            tep=400000*0.015
        else:
            tep=(num-600000)*0.015
        money+=tep
    if num>10000000 :
        money+=(num-1000000)*0.001
    return money
#题目：一个整数，它加上 100 后是一个完全平方数，再加上 168 又是一个完全平方数
def title3():
    for i in range(100): #整数
        for j in range(100):#+100的完全平方数
            if j*j == i+100:
                for k in range(100):#+168的完全平方数
                    if((j+k)*(j+k) == i+168):
                        return i
#题目：输入某年某月某日，判断这一天是这一年的第几天？ 
def title4():
    string=input("年-月-日：")
    nian=int(string.split('-')[0])
    yue=int(string.split('-')[1])
    ri=int(string.split('-')[2])
    days=0
    for i in range(13):
        if i < yue:
            if i in [1,3,5,7,8,10,12]:
                days+=31
            if i in [4,6,9,11]:
                days+=30
            if nian%4==0 and i==2:
                days+=28
            elif i==2:
                days+=29
    days+=ri
    return days
#题目：输入三个整数 x，y，z，请把这三个数由小到大输出。 
def title5():
    string=input("请输入3个数，用逗号隔开：")
    num1=int(string.split(',')[0])
    num2=int(string.split(',')[1])
    num3=int(string.split(',')[2])
    arr=[num1,num2,num3]
    arr.sort()
    return arr
    
#题目：用 *号输出字母 C的图案。 
def title6():
    string=""
    for i in range(0,9):
        print(i)
        if i==0:
            string+=" "*2
            string+="*"*4
        if i==1:
            string+=" "*1
            string+="*"*2
            string+=" "*3
            string+="*"*1
        if i==2:
            string+=" "*1
            string+="*"*1
        if i==3:
            string+="*"*2
        if i==4:
            string+="*"*1
        if i==5:
            string+="*"*2
        if i==6:
            string+=" "*1
            string+="*"*1
        if i==7:
            string+=" "*1
            string+="*"*2
            string+=" "*3
            string+="*"*1
        if i==8:
            string+=" "*2
            string+="*"*4
        string+='\n'
    return string
#题目：输出 9*9 口诀表。 uu
def title7():
    string=""
    for i in range(1,10):
        for j in range(1,10):
            string+=str(i)+"*"+str(j)+"="+str(i*j)+"  "
        string+='\n'
    return string

def title8():
    string=""
    for i in range(8):
        for j in range(8):
            if i%2==0:
                if j%2==0:
                    string+=" "
                else:
                    string+="*"
            else:
                if j%2==0:
                    string+="*"
                else:
                    string+=" "
        string+='\n'
    return string
    ☺
def title9():
    
print(title8())

        
        

