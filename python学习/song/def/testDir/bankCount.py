#conding=utf-8
#@time  - 
#@author baiyang
'''
创建一个名为BankAccount的类
1）创建一个接受整数的构造函数，并将其分配给余额balance属性
2）创建一个称为deposit的方法，该方法可以存款金额并相应地更新余额balance
3)创建一个名为withdraw的方法，该方法将提取现金并相应地更新余额balance，如果
金额大于余额balance,则返回invaid transaction
4)创建BankAccount类的子类 MinimumBalanceAccount
5)为所写的代码，添加相应的测试用例

'''
class BankAccount():
    def __init__(self,money):
        if type(money) == int and money>0: #只允许整数进入
            self.balance=money
    def deposi(self,money):
        if (type(money) == int or type(money)==float) and money>0: #只允许 整数、浮点数 和数值大于0
            self.balance+=money
    def withdraw(self,money):
        if (money>self.balance and (type(money) != int or type(money)!=float)) or money<=0:
            #金额
            return "invaid transaction"
        else:
            self.balance-= money
class MinimumBalanceAccount(BankAccount):
    def __init__(self,money):
        super(MinimumBalanceAccount,self).__init__(money)


if __name__ == "__main__":
    bank = BankAccount(5000)
    bank.deposi(200)
    bank.withdraw(300)
    mini=MinimumBalanceAccount(3000)
    mini.deposi(3000)
    bol = False
    newBank=None
    yue = input("请输入余额：")
    if yue.isdigit():
        newBank = BankAccount(int(yue))
    while bol:
        print("1：为取钱，2为存钱，3为查询，4为退出")
        zhilin =int(input("请输入操作指令："))
        if zhilin == 2:
            money = input("请输入金额：")
            newBank.deposi(int(money))
        if zhilin == 1:
            money = input("请输入金额：")
            print(newBank.withdraw(int(money)))
        if zhilin == 3:
            print(newBank.balance)
        if zhilin == 4:
            bol = False
    print(mini.balance)
    print(bank.balance)