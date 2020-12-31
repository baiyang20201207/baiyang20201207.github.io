#conding=utf-8
#@time  - 
#@author baiyang
def writeFile(filename,string,addr=''):
    if addr == "":
        fileaddr=filename
    else:
        fileaddr = addr + '\\' + filename
    # print(fileaddr)
    f=open(fileaddr,'w',encoding='utf-8')
    if type(string) == str:
        print(string)
        # f.write(string)
    elif type(string) == list:
        f.write(string)
    f.close()
def appendFile(filename,string,addr=""):
    if addr == "":
        fileaddr=filename
    else:
        fileaddr = addr + '\\' + filename
    print(fileaddr)
    f = open(fileaddr, 'w', encoding='utf-8')
    if type(string) == str:
        print(string)
        f.write(string)
    elif type(string) == list:
        f.write(string)
    f.close()
def readFile(filename,addr=''):
    if addr == "":
        fileaddr=filename
    else:
        fileaddr = addr + '\\' + filename
    with open(fileaddr,encoding='utf-8') as f:
        string = f.read();
        return string

# def copyfile(filename,mbaddr,add=''):

# print(type("a") == str)
# appendFile('hahha.txt','hahah')
# appendFile('hahha.txt','hahah','..\\file')
print(readFile('text.py'))