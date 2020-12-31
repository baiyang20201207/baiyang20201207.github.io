#conding=utf-8
#@time  - 
#@author baiyang
bol=True
while bol:
    title=input("请输入题目")
    if title.isdigit():
        title=int(title)
# 1.要求用户输入两个数计算两数的和。如果这两个数的和大于100，则输出“两数和大于100”，否则输出“两数和小于100”。
        if title==1:
            num1=input("数字1：")
            num2=input("数字2：")
            if num1.isdigit() and num2.isdigit():
                num1=int(num1)
                num2=int(num2)
                if num1+num2 > 100:
                    print("两数之和大于100")
                elif num2+num1 < 100:
                    print("两数之和小于100")
# 2：编写一个程序，根据用户输入的考试成绩，输出相应的成绩评定信息。成绩大于等于90分输出“优”；成绩大于等于80分小于90分输出“良”；成绩大于等于60分小于80分输出“中”，成绩小于60分输出“差”。
        if title ==2:
            score = input("请输入成绩：")
            if score.isdigit():
                score = int(score)
                if score<=100:
                    if score>=90:
                        print("优秀")
                    elif score>=80:
                        print("良好")
                    elif score>=60:
                        print("中的")
                    elif score<60:
                        print("劣等")
# 3：编写一个程序，要求用户输入两个整数，如果输入的两个整数不相等，输出最大的数。
#
        if title == 3:
            num1=input("数字1：")
            num2=input("数字2：")
            if num1.isdigit() and num2.isdigit():
                num1=int(num1)
                num2=int(num2)
                print(max(num1,num2))
# 巩固作业：
#
# 1.大家都知道，男大当婚，女大当嫁。
# 那么女方家长要嫁女儿，
# 当然要提出一定的条件：
# * 高：180cm以上; 富:1000万以上; 帅:500以上;
# *
# 如果这三个条件同时满足，则:'我一定要嫁给他'
# *
# 如果三个条件有为真的情况，则:'嫁吧，比上不足，比下有余。'
# *
# 如果三个条件都不满足，则:'不嫁！'
        if title==4:
            height=input("输入你的身高：")
            money=input("输入你的身价：")
            yanz=input("输入你的颜值：")
            # heightsize=height[0:3]
            # dnawei=height[3::]
            if height.isdigit() and money.isdigit() and yanz.isdigit():
                height,money,yanz = int(height),int(money),int(yanz)
                if height>180 or money>1000 or yanz>500:
                    if height>180 and money>1000 or height>180 and yanz>500 or money>1000 and yanz>500:
                        if height>180 and money>1000 and yanz>500:
                            print("我一定要嫁给他")
                        else:
                            print("这或许就是爱情吧")
                    else:
                        print("嫁吧，比上不足，比下有余。")
                else:
                    print("给姐爬")
#
#
#
#
# 2.从键盘输入三个数，从大到小排列输出。
        if title == 5:
            num1=input("第一个数：")
            num2=input("第二个数：")
            num3=input("第三个数：")
            if num1.isdigit() and num2.isdigit() and num3.isdigit():
                num1,num2,num3 = int(num1),int(num2),int(num3)
                arr=[num1,num2,num3]
                arr.sort(reverse=True)
                print(arr)
        if title == 6:

            for i in range(1,101):
                if i % 2 == 1:
                    print(i,end=' ')
                if i % 10 == 0:
                    print()
        if title == 7:
            num1=input("情输入一个数：")
            zishu=[]
            isTrue=True #
            if num1.isdigit():# 判断是否是全数字
                num1=int(num1) #转化为整形
                for i in range(2,num1+1): #从二开始进行循环
                    if len(zishu) == 0: #如果质数长度为零
                        zishu.append(i) #就添加
                        continue
                    for j in zishu: #循环质数
                        if i % j == 0:
                            isTrue = False
                            break
                    if isTrue :
                        zishu.append(i)
                    isTrue = True
                print(zishu)
                if zishu[len(zishu)-1] == num1:
                    print("是质数")
                else:
                    print("不是质数")
        if title == 8:
            for i in range(1,10):
                for j in range(1,10):
                    print(i,'*',j,'=',i*j,end="  ")
                    print(i,'*',j,'=',i*j,end="  ")
                print()

        if title ==9:
            bol=False