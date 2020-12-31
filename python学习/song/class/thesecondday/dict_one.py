#conding=utf-8
#@time 2020/12/30 10:04
#@AUTHOR sx
'''
字典：dict()
特点：
1.一个元素是由(key：value) 组成，多个元素与元素之间用,隔开
2.用｛｝括起来的键值对
3.无序，所有不能用下标取值
'''
d={'id':20200901001,'name':'jim','age':18}
print(type(d))
print(d)
#取字典中的：字典名[key]
print(d['id'])
#取出所有的value的函数：
print(d.values())
#取出所有的key的函数：
print(d.keys())
#取出所有的key:value的函数：
print(d.items())
r=d.get('name')
print("名字为：",r)
'''
#字典的增加或是修改:使用赋值方式处理字典时，
# 如果key不存于原字典中时，就是新增，如果存在于 原字典中时就是修改
'''
d['hire_date']='2020-09-01 12:12:12'
print(d)
d['age']=20
print(d)

d.setdefault('sex','L')
print(d)
d.setdefault('name','jone')
print(d)

d.update({'sex':'v'})

#字典内容的删除
d.pop('hire_date')
print(d)

d.popitem()
print(d)
d.update({'sex':'v'})
print(d)

dd={'spr':{"a":1,'b':2,'c':{'n':6}},'sum':'3-4'}
print(dd['spr']['b'])