#conding=utf-8
#@time 2020/12/30 15:55
#@AUTHOR sx
#1+2+3...100
i=1
s=0
while i<=100:
    s=s+i
    i=i+1
print(s)
'''
1.判断一个数是否为质数
2.请打印出100以内的质数



'''
shu=56
isshi=1
for m in range(2,shu//2+1):
    if shu%m==0:
        isshi=0
        break
if isshi:
    print("{}是质数".format(shu))
else:
    print("%d不是质数"%shu)
'''   
*******
*******
*******
*******
'''
for c in range(1,5):
    for r in range(1,8):
        print("*",end='')
    print()

'''
打印九九乘法表
'''

'''
冒泡排序
'''
li=[12,45,67,23,49,89]
l=len(li)
for i in range(l):
    for j in range(l-i-1):
        if li[j]>li[j+1]:
            li[j],li[j+1]=li[j+1],li[j]
print(li)


