#conding=utf-8
#@time 2020/12/30 14:53
#@AUTHOR sx
'''
循环语句：
1.for 变量 in 序列：
        循环体

range()  #产生数据序列的一个函数
range(1,8)   1,2,3,4,5,6,7
range(8)  0,1,2,3,4,5,6,7
range(0,10,3)   0,3,6,9

2.while 条件表达式：
    循环体

3.continue  在循环语句是遇到了continue，结束本次循环，进行下一次循环
4.break     在循环语句是遇到了break，结束整个循环


'''


s="hello"
for c  in s:
    print(c,end=' ')

l=[1,2,3,4,5]
for h  in l:
    print(h,end=' ')
print()

d={'id':2020120988,"name":'hhhh',"email":"123456@qq.com"}
print(d.items())

for k,v in d.items():
    print(k,v)

for i in range(8):
    print(i)

#1+2+3+4...100
s=0
for j in  range(1,101):
    s=s+j
    print(s)

'''
打印出100以内的奇数，每5个数据换行一次。
'''
#1，3，5，7，9.。。。。。99
for i in range(1,100,2):
    print(i,end= ' ')
    if (i+1)  % 10 ==0:
        print()

#continue
for i in range(1,100):
    if i%5==0:
        break
    print(i)