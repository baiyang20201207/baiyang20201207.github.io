#conding=utf-8
#@time  - 
#@author baiyang
import string
# s1=input('s1：')
# s2=input('s2：')
# print(s1,s2)
# print(s1.index(s2))
# b='abc'
# c=s1[3::]
# print(b+c)
# print(s1)

# ss='<meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">'
# sq='<link rel="dns-prefetch" href="//dss0.bdstatic.com"/><link rel="dns-prefetch" href="//dss1.bdstatic.com"/><link rel="dns-prefetch" href="//ss1.bdstatic.com"/>'
# char=ss.split(';')[1].split('=')[0]
# dss=sq.split('//')[1].split('"')[0]
# print(char)
# print(dss)
print('\tadsadadas')

# 1，写代码，有如下列列表，按照要求实现每一个功能 li = ["alex", "WuSir", "ritian", "barry", "wenzhou"]

# 1.计算列列表的长度并输出
li = ["alex", "WuSir", "ritian", "barry", "wenzhou"]
print(len(li))

# 2.列列表中追加元素"seven",并输出添加后的列列表
li.append('seven')
print(li)

# 3.请在列列表的第1个位置插入元素"Tony",并输出添加后的列列表
li.insert(0,'Tony')
print(li)

#  4.请修改列列表第2个位置的元素为"Kelly",并输出修改后的列列表
li[1]='Kenny'
print(li)

#  5.请将列表l2=[1,"a",3,4,"heart"]的每个元素添加到列列表li中，行代码实现，不允许循环添加。
l2=[1,"a",3,4,"heart"]
li.extend(l2)
print(li)

#  6.请将字符串串s = "qwert"的每一个元素添加到列列表li中，一行行代码实现，不不 允许循环添加
s = "qwert"
li.extend(s)
print(li)

#7.请添加列列表中的元素"eric",并输出添加后的列列表
li.append("eric")
print(li)
#  8.请删除列列表中的第2个元素，并输出删除的元素和删除元素后的列列表
print(li.pop(1))
print(li)
#  9.请删除列列表中的第2至4个元素，并输出删除元素后的列表
del li[1:4]
print(li)
#  10.请将列表所有得元素反转，并输出反转后的列表
li.reverse()
print(li)
#  11.请计算出"alex"元素在列列表li中出现的次数，并输出该次数。
print(li.count('alex'))
# 1.有列表data=['alex',49,[1900,3,18]]，分别取出列表中的名字，年龄，出生的年，月，日赋值给不同的变量
data=['alex',49,[1900,3,18]]
name=data[0]
age=data[1]
briyear=data[2][0]
brimon=data[2][1]
briday=data[2][2]
# 2.把A列列表的第三到第六位之间的元素删除。
