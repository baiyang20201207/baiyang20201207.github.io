#conding=utf-8
#@time 2020/12/29 15:13
#@AUTHOR sx
'''
字符串相关 函数：
1.求字符串的长度：len(字符串名)
2.统计某个字符出现在的次数：字符串名.count('字符')
3.查找函数：字符串名.find('字符')
4.替换函数：字符串名.replace(old,new)
5.字符串的大小写转换：upper(),lower(),title()
字符串.upper()
6.判断函数：isalpha(),isdigit(),startswith('开头字母'),endswith("结尾字母")
'''
print(len("jdueueueu"))
s='helloworld'
print(s.count('l'))
print(s.find('y'))
print(s.replace('o','python',1))
print(s.upper(),s.title(),s.lower())
print(s.isalpha())
a='8773663u'
print(a.isdigit())
print(s.startswith('ahel'))
print(s.endswith('tld'))
