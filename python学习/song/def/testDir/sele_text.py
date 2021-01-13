#conding=utf-8
#@time  - 
#@author baiyang
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
driver = webdriver.Chrome()
driver.maximize_window()
sleep(0.1)
driver.get("https://www.baidu.com/")
moved = driver.find_element_by_id('s-usersetting-top')
ActionChains(driver).move_to_element(moved).perform()
sleep(0.1)
driver.find_element_by_class_name('s-user-setting-pfmenu').find_element_by_tag_name('a').click()
sleep(0.1)
#点击高级搜索
driver.find_element_by_xpath(r"//li[@class='item']").click()

driver.find_element_by_xpath("//input[@name='q1']").send_keys('python')
driver.find_element_by_xpath("//input[@name='q2']").send_keys('语言')
driver.find_element_by_xpath("//input[@name='q3']").send_keys('Git')
driver.find_element_by_xpath("//input[@name='q4']").send_keys('21')
#选择时间
driver.find_element_by_xpath("//div[@class='c-select adv-gpc-select']").click()
driver.find_element_by_xpath("//div[@class='c-select-dropdown ']/descendant::p[text()='最近一天']").click()
#c-select adv-ft-select 选择格式
driver.find_element_by_xpath("//div[@class='c-select adv-ft-select']").click()
x = driver.find_elements_by_xpath(r"//div[@class='c-select-dropdown adv-ft-dropdown']/descendant::p")[2].click()
print(x)
# driver.find_elements_by_class_name('item')[1].click()
# times=driver.find_elements_by_class_name('c-select-selection')[0]
# print(times)
# types=driver.find_elements_by_class_name('c-select-selection')[1]
# times.click()
# time_p=driver.find_elements_by_class_name('c-select-dropdown ')[1]
# time_p=driver.find_element_by_xpath(r"//div[@class='c-select-dropdown-list' ]")
# p=time_p.find_elements_by_class_name('c-select-item')
# ActionChains(driver).click(p).perform()

# p[4].click()
# print(time_p)
sleep(3)
driver.quit()
