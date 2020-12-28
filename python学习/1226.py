# 1、求-1+2-3+4-......-99+100的累积和
#    求1-2+3-4+......+99-100的累积和
#    求1-1/2+1/3-1/4+......+1/99-1/100的值
#    要求用定义函数的方法
def jishu():
    num=0
    for i in range(1,100,2):
        num+=i
    return num
def oushu():
    num=0
    for i in range(2,101,2):
        num+=i
    return num
def jishufenmu():
    num=0
    for i in range(1,100,2):
        num+=(1/i)
    return num
def oushufenmu():
    num=0
    for i in range(2,101,2):
        num+=(1/i)
    return num

#1、
# print(-1*jishu()+oushu())
# print(jishu()-oushu())
# print(jishufenmu()-oushufenmu())

#1-1水仙花数(一个三位数=百位数字的立方+十位数字的立方+各位数字的立方)
def shuixian():
    arr=[]
    for i in range(100,1000):
        string=str(i)
        b=int(string[1])
        c=int(string[2])
        a=int(string[0])
        num=a*a*a+b*b*b+c*c*c
        if i==num:
           arr.append(num)
    return arr
# print(shuixian()) 
#2、打印下面图形，满足如下要求：
def shanjiaoxing():
    num=True
    while num:
        zhiling=input("请输入指令")
        if zhiling=="y+":
            height=int(input("输入高度"))
            size=int(input("输入循环次数"))
            print("开始打印")
            prints=""
            # print(height*size)
            for i in range(0,height):
                for j in range(0,height*size):
                    j=j%height
                    if j<=i:
                        prints+='*'
                    else:
                        prints+=' '
                print(prints)
                prints=""
            num = False
        elif zhiling=="n+":
            num = False
# shanjiaoxing()

def printyuan():
    fu='◎ '
    string=""
    for i in range(1,11):
        string+= fu*i
        string+='\n'
    for i in range(10):
        string+=fu*10
        string+='\n'
    for i in range(10):
        string+=fu*(10-i)
        string+='\n'
    return string

def controlyuan():
    size=int(input("请输入打印次数："))
    name=input("请输入文件名：")
    path=input("请输入路劲")
    f=open(path+"\\"+name,'a');
    for i in range(size):
        string1="第"+str(i+1)+"遍打印\n"
        print(string1)
        f.write(string1)
        string=printyuan();
        f.write(string);
    f.close();
# controlyuan()
def teshu():
    num=True
    while num:
        zhiling=input("请输入指令")
        if zhiling=="y+":
            height=int(input("输入高度"))
            print("开始打印")
            prints=""
            # print(height*size)
            for i in range(1,height+1):
                prints+=" "*(i-1)
                prints+="*"*i
                print(prints);
                prints=""
            num = False
        elif zhiling=="n+":
            num = False
# teshu();
def teshu1():
    num=True
    while num:
        zhiling=input("请输入指令")
        if zhiling=="y+":
            height=int(input("输入高度"))
            print("开始打印")
            prints=""
            # print(height*size)
            for i in range(1,height+1):
                prints+=printfu(i,height)
                prints+=printfu(-i,height)
                prints+=printfu(i,height)
                print(prints);
                prints=""
            num = False
        elif zhiling=="n+":
            num = False
def printfu(num,len):
    restring=""
    for i in range(len*2):
        if num>0:
            if i>=num and i<num*2:
                restring+="*"
            else:
                restring+=" " 
        else:
            tep=-1*num;
            if i < (len*2-tep) and i >= (len*2-tep*2):
                restring+="*"
            else:
                restring+=" "
    return restring 
# teshu1();
# 4
import string
def zimu():
    low=string.ascii_lowercase
    restring=""
    for i in range(26):
        restring+=low[i]
        restring+="*"
        restring+=low[i]
        restring+="*"
        restring+=low[i]
        restring+="*"
        restring+=str(i+1)+low[26-i-1]
        restring+="*"
        restring+=low[26-i-1]
        restring+="*"
    return restring
print(zimu())

