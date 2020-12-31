#conding=utf-8
#@time 2020/12/31 11:10
#baiyang
'''
1.写一个打印一条横线的函数。（提示：横线是若干个“—”组成）
'''
def heixian(num=30):
    for i in range(num):
        print('-',end='-')
'''
2.写一个函数，可以通过输入的参数，打印出自定义行数的横线。（提示：调用上面的函数）
'''
def hangheixian(num=30):
    for i in range(num):
        heixian()
        print()
'''
3.写一个函数求三个数的和
'''
def quhe(a=0,b=0,c=0):
    if not str(a).isdigit():
        print("a不是数字")
        return None
    if not str(b).isdigit():
        print("b不是数字")
        return None
    if not str(c).isdigit():
        print("c不是数字")
        return None

    he=a+b+c
    print(he)
    return he
'''
4.写一个函数求三个数的平均值（提示：调用上面的函数）
'''
def quavg(a=0,b=0,c=0):
    he = quhe(a,b,c)
    return  he/3
hangheixian(40)
print(quavg(1,2,3))


