zishu=[]
isTrue=True #
# if num1.isdigit():# 判断是否是全数字
#     num1=int(num1) #转化为整形
for i in range(2,101): #从二开始进行循环
	if len(zishu) == 0: #如果质数长度为零
		zishu.append(i) #就添加
		continue
	for j in zishu: #循环质数
		if i % j == 0:
			isTrue = False
			break
	if isTrue :
		zishu.append(i)
	isTrue = True
print(zishu)