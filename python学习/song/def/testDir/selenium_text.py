#conding=utf-8
#@time  - 
#@author baiyang
from selenium import webdriver
from time import sleep
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.select import Select
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
driver = webdriver.Chrome()
driver.maximize_window()
driver.get("http://www.testingedu.com.cn:8000/Home/user/login.html")
driver.find_element_by_name('username').send_keys('13800138006')
driver.find_element_by_name('password').send_keys('123456')
driver.find_element_by_id('verify_code').send_keys('1')
driver.find_element_by_name('sbtbutton').click()
sleep(0.5)
# 选择收货地址
set=driver.find_element_by_class_name('u-dl')
action=ActionChains(driver)
action.move_to_element(set).perform()
driver.find_elements_by_xpath(r"//div[@class='u-dd']/child::a")[1].click()
#新增收货地址
driver.find_element_by_class_name("address").click()
#填写收货地址
driver.find_elements_by_class_name("invoice_tt")[0].send_keys("柏洋")
driver.find_elements_by_class_name("invoice_tt")[1].send_keys("13143419023")
driver.find_elements_by_class_name("invoice_tt")[2].send_keys("在你心里")
# 实例化下拉选框
sel5=Select(WebDriverWait(driver,5,0.2).until(EC.presence_of_element_located((By.ID,'province'))))
# sel=Select(driver.find_element_by_id('province'))
sel5.select_by_value('28240')
sleep(0.5)
sel1=Select(WebDriverWait(driver,5,0.2).until(EC.presence_of_element_located((By.ID,'city'))))
# sel1=Select(driver.find_element_by_id('city'))
sel1.select_by_value('28558')
sleep(0.5)
sel2=Select(WebDriverWait(driver,5,0.2).until(EC.presence_of_element_located((By.ID,'district'))))
# sel2=Select(driver.find_element_by_id('district'))
sel2.select_by_value('28604')
sleep(0.5)
sel3=Select(WebDriverWait(driver,5,0.2).until(EC.presence_of_element_located((By.ID,'twon'))))
# sel3=Select(driver.find_element_by_id('twon'))
sel3.select_by_value('28612')
#提交
# sleep(1)
# a = driver.find_element_by_class_name('red')
sleep(5)
# print(a)
driver.quit()