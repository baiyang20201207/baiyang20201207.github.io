#conding=utf-8
#@time 2020/12/29 11:21
#@AUTHOR sx
'''
#注释：单行注释#，多行注释
写入多行。
'''
'''
标识符命名规则：
1.由字母，数字，下划线组成
2.开头只能是字母或下划线
3.关键字或是保留字不能作为标识符
if,else ,in ,while

aaa,a,0oi,r_111,_09888
'''
import keyword
print(keyword.kwlist)
a=23.988
print(type(a))

#连续赋值
a=b=c=10
a=80
print(a,b,c)

#同一个语句中有多条赋值
x=10;y=20
print("x={},y={}".format(x,y))

#交换赋值
x,y=y,x  #x,y中的值对换
print("x={},y={}".format(x,y))
a=88484944040400404040404004948387337363663
a=str(a)

print(a)
'''
格式输出的控制方式：
print("{}{}{}".format(变量名，变量名，变量名))
print("{0}{1}{2}{3}".format(变量名，变量名，变量名,变量名))
print("{a}{b}{c}".format(a=1，b=2，c=3))
'''
print("结果为：{},{},{}".format(34,56,77))
print("{0},{1},{5},{0}".format(9,4,7,3,2,2))
print("{c}  {b}  {c}".format(a=1,b=2,c=3))

'''
%占位符
%d,%i,%f,%e,%s
1.25E+5
'''
print("结果为：%-10d,%10.3f,%s"%(34,56.7777,'ttttt'))