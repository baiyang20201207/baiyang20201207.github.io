#conding=utf-8
#@time 2020/12/29 16:04
#@AUTHOR sx
'''
切片函数：split
字符串名.split(' 切片符号'，m)[n]

'''
s='www.baidu.com'
t=s.split('.',2)[1]
print(t)
ss='<meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">'
sq='<link rel="dns-prefetch" href="//dss0.bdstatic.com"/><link rel="dns-prefetch" href="/s/dss1.bdstatic.com"/><link rel="dns-prefetch" href="//ss1.bdstatic.com"/>'
print(ss.split('=')[2].split(';')[1])
print(sq.split('"')[3].split('//')[1])

'''
转义字符串：
\',\",\n,\t,\\
'''
path=r'E:\class007\three_day\abc.txt'
print(path,end=' ')
print("abcvk\niejc")
print('qqq')
print()

'''
类型：
3.列表：list()
特点：
  a.用中括号括起来多种类型数据集合
  b.元素是有序，是一个序列
  c.元素可以修改
'''
li=[1,2,3,4,5,12.8,'hj',['q','e',7]]
print(type(li))
print(len(li))

'''
列表的运算：
增，删，改，查
'''
#列表元素的查看：列表名[index],,,列表名[start:end:step]
print(li[3])
print(li[::2])
print(li[1::2])
print(li[-1][1])

#列表元素的增加
#列表名.append(obj)
print(li)
li.append('abc')
print(li)
li.extend("abc")
print(li)
li.insert(2,'hhh')
print(li)

#修改元素
li[0]='ccc'
print(li)

#删除元素
li.pop()
print(li)
li.pop(7)
print(li)
li.remove('hhh')
print(li)
del li[6][0]
print(li)

li.clear()
print(li)

