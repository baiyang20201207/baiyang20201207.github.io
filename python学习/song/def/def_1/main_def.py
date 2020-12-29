#conding=utf-8
#@time  - 
#@author baiyang
# import 模块
# from 模块 import 函数或类
#第一种方法
import def_1.def_first_1  as ddf
print(ddf.add1(67,98))

#第二种方法
from def_1 import def_first_1 as df
print(df.add1(8,9))

#第三种方法
#from  def_1.def_first_1 import add1,add
from  def_1.def_first_1 import  *
print(add1(12,4))