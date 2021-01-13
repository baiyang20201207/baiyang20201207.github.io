#conding=utf-8
#@time  - 
#@author baiyang
from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from time import sleep
driver = webdriver.Chrome()
driver.maximize_window()
#登录
driver.get('https://mail.qq.com/')
#切换至登录frame
driver.switch_to.frame('login_frame')
driver.find_element_by_id('u').send_keys("1034242265@qq.com")
driver.find_element_by_id('p').send_keys("baiyang2015")
driver.find_element_by_id('login_button').click()
#登录成功，查看内容是否加载完成，并且进入写信页面
write=WebDriverWait(driver,10,0.1).until(EC.presence_of_element_located((By.ID,"composebtn")))
write.click()
#进入写信页面，切换至信件操作frame中
driver.switch_to.frame('mainFrame')

mail='//*[@id="toAreaCtrl"]/div[2]/input'
mail1='27953186@qq.com'
WebDriverWait(driver,10,0.1).until(EC.presence_of_element_located((By.XPATH,mail))).send_keys(mail1)

# #字符串的地址指向，最近联系人中的第二个a标签。即老师的邮箱
# addr="//div[@id='quickaddr_div']/descendant::a[2]"
# #等待最近联系人列表是否加载完成
# choice=WebDriverWait(driver,10,0.1).until(EC.presence_of_element_located((By.XPATH,addr)))
# #选择老师邮箱的a标签
# choice.click()
#设置主题
driver.find_element_by_id('subject').send_keys("发送成功")

#切换到内容frame，找到该frame
iframe=driver.find_element_by_xpath("//div[@id='QMEditorArea']//iframe")
driver.switch_to.frame(iframe)
#下面的字符串为js脚本
# js="document.querySelectorAll('div')[0].innerHTML='我在写js脚本'"
#执行js脚本
# driver.execute_script(js)
driver.find_element_by_tag_name('div').send_keys("新年快乐")
#退回父亲frame
driver.switch_to.parent_frame()
#点击发送
# driver.find_element_by_xpath("//div[@id='toolbar']/descendant::a[3]").click()

sleep(5)
# driver.quit()