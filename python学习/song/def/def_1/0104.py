#conding=utf-8
#@time  - 
#@author baiyang
class father():
    def __init__(self,aa):
        self.name="爸爸"
        self.fuse="黄色"
        self.height=170
        self.weight=155
        self.dd=aa
        print(3)
    def cook(self,shicai):
        return "巨辣"
    def test(self):
        print(self.dd)

class sun():
    def __init__(self):
        self.name="儿子"

if __name__ == '__main__':
    bb=father(123)
    bb.test()