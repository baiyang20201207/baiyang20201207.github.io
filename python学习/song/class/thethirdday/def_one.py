#conding=utf-8
#@time 2020/12/31 10:45
#@AUTHOR sx
# import  random
# print(random.choice([1,2,3,4,5]))
# print(random.randint(100,999))
'''
def 函数():
    函数体
    
函数名（）
'''
def tuple_test(*x):
    print(x)
    for i in x:
        print(i)
    return

def tuple_test1(**x):  #关键字参数
    print(x)
    # for i in x:
    #     print(i)
    return

def tuple_test3(a,b,x=9):
    print(x,a,b)

    return

if __name__ == '__main__':
    tuple_test1(a=1,b=2)
    tuple_test3(3,3,79)