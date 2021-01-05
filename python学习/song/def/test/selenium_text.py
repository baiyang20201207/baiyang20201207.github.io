#conding=utf-8
#@time  - 
#@author baiyang
from selenium import webdriver
from time import sleep
driver = webdriver.Chrome()
driver.get("http://www.testingedu.com.cn:8000/Home/user/login.html")
driver.find_element_by_name('username').send_keys('13800138006')
driver.find_element_by_name('password').send_keys('123456')
driver.find_element_by_id('verify_code').send_keys('1')
driver.find_element_by_name('sbtbutton').click()
sleep(1)
a = driver.find_element_by_class_name('red')
sleep(5)
print(a)
driver.quit()