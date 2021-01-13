#conding=utf-8
#@time  - 
#@author baiyang
'''
1.写一函数，判断这个数是否为回文数
'''
import string
import keyword
def huiwenshu(string):
    print(string.isdigit())
    restring=string[::-1]
    return restring == string
print(huiwenshu("-123123"))
# print(huiwenshu(123123213))
'''
2.写一函数，判断传入的字符串是否为python认可的标识符。
'''
def isTrue(fuhao):
    l1=keyword.kwlist
    # print(l1)
    zimu=string.ascii_letters #字母字符串存储全部字母，数字，下划线
    zimu+="_"
    ishefa=1
    for i in range(0,10):
        zimu+=str(i)
    if fuhao[0].isdigit():#判断是否是数字开头
       ishefa=0
    for i in range(0,len(fuhao)): #遍历标识符，是不是由字母字符串组成的
        # f = zimu.index(fuhao[i])
        if fuhao[i] not in zimu:
            ishefa=0
    # a=l1.index(fuhao) #判断fuhao是否跟关键词列表中
    if fuhao in l1:
        ishefa=0
    if ishefa:
        print("是合法标识符")
    else:
        print("不是合法标识符")
    return  ishefa
print(isTrue('1del'))
isTrue("asdsad%%")