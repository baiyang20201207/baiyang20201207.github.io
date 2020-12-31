#conding=utf-8
#@time 2020/12/31 11:00
#@AUTHOR sx
def shushu(shu):

    isshi=1
    for m in range(2,shu//2+1):
        if shu%m==0:
            isshi=0
            break
    if isshi:
        print("{}是质数".format(shu))
    else:
        print("%d不是质数"%shu)

shushu(10)
if __name__ == '__main__':

    shushu(78)
    shushu(79)