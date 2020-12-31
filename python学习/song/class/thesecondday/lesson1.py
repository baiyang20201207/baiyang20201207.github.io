#conding=utf-8
#@time 2020/12/30 9:34
#@AUTHOR sx
'''
元组tuple()：
特征：
1.用（）括起来的多种类型的数据集合
2.是有序的序列

'''
l=[]
t=('yeueu',1,2,3,'a')
print(type(t))
#取元组的值：
#元组名[index],,,,元组名[start:end:step]
print(t[3])
print(t[::2])
#元组元素不能修改
#t[3]=4
print(t)

#元组元素的增加
t1=(9,8,7)
t=t+t1
print(t)

#单个元素是不能删除
del t1

#t.clear()
print(t)