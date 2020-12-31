#conding=utf-8
#@time 2020/12/29 9:15
#@AUTHOR sx
'''被调函数：
def 函数名()：
    执行部分
    return(返回的值)


主调函数：
函数名（）
'''
#加法函数
def add():
    a=3
    b=4
    return(a+b)


def add1(a,b):   #a,b形式参数

    return(a+b)

if __name__ == '__main__':
    y=add()
    print(y)
    print(add1(12.7,6))