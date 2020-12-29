i=j=0
k=10
while i<=10:
    print('*'*i)
    i+=1
while j<=10:
    print('*'*10)
    j+=1
while k>0:
    print('*'*k)
    k-=1
import string
l=string.ascii_letters
print(l)
i=1
num=0
while i<101:
    num+=i
    i+=1
print(num)
num=0
i=1
while i<101:
    if i%2==0:
        num-=i
    else:
        num+=i
    i+=1
print(num);
num=0
i=1
while i<101:
    if i%2==0:
        num+=i
    else:
        num-=i
    i+=1
print(num);
num=0
i=1
while i<101:
    num+=1/i
    i+=1
print(num);
l1 = [1,2,3,4]
l2 = ['a','b','c','d']
l3 = l1+l2;
print('l1+l2%s'%l3);
print(l3*3)
import string
low=string.ascii_lowercase
up=string.ascii_uppercase[::-1]
lowlen=len(low)
uplen=len(up)
list1=[];
for i in range(uplen):
    list1.append(low[i]+up[i])

str1='i am a gay'
s1=str1.split(' ')
s2 = s1[::-1]
print(s2)
f=open('D://test.txt','a')
i=j=0
k=10
str=''
while i<=10:
    str+='◎'
    i+=1
while j<=10:
    print('*'*10)
    j+=1
while k>0:
    print('*'*k)
    k-=1