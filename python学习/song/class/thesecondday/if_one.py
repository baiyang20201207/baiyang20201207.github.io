#conding=utf-8
#@time 2020/12/30 11:12
#@AUTHOR sx
'''
条件语句的方式：
if 条件表达式:
    条件表达式为真，要执行语句
    语句
else:
    条件表式为假，要执行语句
'''
#求两个数中最大数
a=30
b=20
if a>b:
    m=a
else:
    m=b
print(m)

'''
if语句的第二种表示方式：
if 条件表达式1：
    条件表达式1为真执行语句
elif 条件表达式2：
    条件表达式2为真执行语句
elif 条件表达式3：
    条件表达式3为真执行语句
else:
    所有的条件为假的时候要执行的语句
'''
'''
#需求：score:90以上   A
             80~90   B
             70~80   C
             60~70   D
             60以下  E
'''
score=input("请输入成绩：")
if score.isdigit():

    score=int(score)
    if score>=0 and score<=100:

        if score>=90:
            print('A')
        elif score>=80 and score <90:
            print('B')
        elif score >= 70 and score < 80:
            print('C')
        elif score>=60 and score <70:
            print('D')
        else:
            print('E')
    else:
        print("你输入的数据不合法！")
else:

    print("你输入的数据不合法！")
