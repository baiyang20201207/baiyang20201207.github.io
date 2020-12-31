#conding=utf-8
#@time 2020/12/31 14:17
'''
1.写一函数，判读这个数是否为回文数
2.写一函数，判断传入的字符串是否为python认可的标识符。
'''
'''
1.由字母数字下划线组
2.开头只能是字母或是下划线
3.不能是关键字
'''
import keyword
def huiwenshu(shu):
    if shu.isdigit() :

        sh=shu[::-1]
        if shu==sh:
            print("{}是回文数".format(shu))
        else:
            print("{}不是回文数".format(shu))
    else:
        print("请输入数字相关的内容")

#判断传入的字符串是否为python认可的标识符
def biaoshifu(bsf):
    kw=keyword.kwlist
    print(kw)
    k=[]
    #把所有的关键 字转成小写放到列表K里
    for v in kw:
        k.append(v.lower())
    print(k)
    if bsf.lower() in k:
        print("%s不是标识符"%bsf)
        return
    else:
        m = 0
        #判断首字符是否是下划线或是字母
        if bsf[0]>='a' and bsf[0]<='z'   or bsf[0]>='A' and bsf[0]<='Z'or bsf[0]=='_':
            st=bsf[1::]
            #一个一个的检查字符是否为字母，数字，或是下划线
            for c in st:
                if c>='a' and c<='z'   or c>='A' and c<='Z' or c=='_'  and c>='0' and c<='9':
                    m=m+1
                    continue
                else:
                    print("%s不是标识符"%bsf)
                    return
            #如果每个字符都检查到了，也没有满足不是标识符的条件，那就一定是标识符
            if m==len(bsf)-1:
                print("%s是 合法标识符"%bsf)
                return
        else:
            print("%s不是标识符" % bsf)
            return



if __name__ == '__main__':
    shu="0"
    huiwenshu(shu)
    biaoshifu("中国人")
