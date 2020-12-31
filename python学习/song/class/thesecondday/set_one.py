#conding=utf-8
#@time 2020/12/30 11:02
#@AUTHOR sx
'''
集合set():
1.由｛｝括起来的多种数据的集合
2.不会有重复的记录
'''
se={}
se=set()   #空集合
print(type(se))

se={1,2,3,4,5,3}
print(se)


d={}
l=['a','b','a','c',1,2,3,1,2,2]
se=set(l)
for c in se:
    d[c]=l.count(c)
print(d)
