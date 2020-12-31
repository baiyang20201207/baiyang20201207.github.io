#conding=utf-8
#@time 2020/12/31 9:43
#@AUTHOR sx
with open("abc.txt",'w+',encoding='utf-8')  as f:
    f.write("study python!")
    li=['七言体\n',
    '七言诗包括七言古诗（简称七古）、七言律诗（简称七律）和七言绝句（简称七绝）。\n',
    '七言体是古代诗歌体裁，全篇每句七字或以七字句为主的诗体。它起于汉族民间歌谣。\n',
    '先秦时期除《诗经》，《楚辞》已有七言句式外，《荀子》的《成相篇》就是模仿民间歌谣写成的以七言为主的杂言体韵文。\n']
    f.writelines(li)



with open("abc.txt",'r+',encoding='utf-8')  as f:
    result=f.read()
    print(result)
