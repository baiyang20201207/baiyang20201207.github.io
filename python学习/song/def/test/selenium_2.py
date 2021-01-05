#conding=utf-8
#@time  - 
#@author baiyang
from selenium import webdriver
from time import sleep
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.select import Select
from selenium.webdriver.common.keys import Keys
driver = webdriver.Chrome()
driver.maximize_window()
#登录
driver.get("http://www.testingedu.com.cn:8000/Home/user/login.html")
driver.find_element_by_name('username').send_keys('13800138006')
driver.find_element_by_name('password').send_keys('123456')
driver.find_element_by_id('verify_code').send_keys('1')
driver.find_element_by_name('sbtbutton').click()
sleep(0.5)
#选择地址
seting=driver.find_element_by_xpath('/html/body/div[2]/div/div[3]/ul/li[2]/div')
action=ActionChains(driver)
action.move_to_element(seting).perform()
driver.find_elements_by_xpath(r"//div[@class='u-dd']/child::a")[1].click()
driver.find_element_by_class_name("address").click()
#填空
driver.find_elements_by_class_name("invoice_tt")[0].send_keys("柏洋")
driver.find_elements_by_class_name("invoice_tt")[1].send_keys("13143419023")
driver.find_elements_by_class_name("invoice_tt")[2].send_keys("在你心里")
# 实例化下拉选框
sel=Select(driver.find_element_by_id('province'))
sel.select_by_value('28240')
sleep(0.5)
sel1=Select(driver.find_element_by_id('city'))
sel1.select_by_value('28558')
sleep(0.5)
sel2=Select(driver.find_element_by_id('district'))
sel2.select_by_value('28604')
sleep(0.5)
sel3=Select(driver.find_element_by_id('twon'))
sel3.select_by_value('28612')
#提交
driver.find_element_by_id('address_submit').click()
sleep(3)
driver.quit()