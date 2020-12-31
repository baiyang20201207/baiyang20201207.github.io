#conding=utf-8
#@time  - 
#@author baiyang
'''
写入文件内容：
1.新建并打文件
f=open("操作的文件"，权限，编码)
2.写入内容
f.write("写入的内容")
3.保存并退出
f.close()

读出文件内容：
1.打文件
f=open("操作的文件"，权限，编码)
2.读出内容
result=f.read()
print(result)
3.保存并退出
f.close()

with语句：
'''
f=open("abc.txt",'w+',encoding='utf-8')
f.write("study python!")
a='asdadasddadsadsadasdsad'
li=['七言体\n',
'七言诗包括七言古诗（简称七古）、七言律诗（简称七律）和七言绝句（简称七绝）。\n',
'七言体是古代诗歌体裁，全篇每句七字或以七字句为主的诗体。它起于汉族民间歌谣。\n',
'先秦时期除《诗经》，《楚辞》已有七言句式外，《荀子》的《成相篇》就是模仿民间歌谣写成的以七言为主的杂言体韵文。\n']
f.writelines(li)

f.close()

f=open("abc.txt",'r+',encoding='utf-8')
result=f.read()
print(result)
f.close()