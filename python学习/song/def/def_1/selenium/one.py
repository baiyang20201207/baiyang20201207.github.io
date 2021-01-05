#conding=utf-8
#@time  - 
#@author baiyang
from selenium import webdriver
from time import sleep
driver=webdriver.Chrome()
# driver = webdriver.Chrome(r'C:\Users\Administrator.USER-20200615OM\AppData\Local\Google\Chrome\Application\chrome.exe')
driver.get("https://www.baidu.com/")
driver.find_element_by_id("kw").send_keys("4399")
driver.find_element_by_id("su").click()
sleep(1)
driver.find_element_by_id("1").find_element_by_class_name("c-img").click()
driver.close()
driver.switch_to.window(driver.window_handles[0])
search=driver.find_element_by_class_name("search")
driver.find_element_by_id("smart_input").send_keys("皇城突袭")
search.find_element_by_class_name("s_btn").click()
sleep(1)
driver.close()
driver.switch_to.window(driver.window_handles[0])
b = driver.find_elements_by_class_name('type_d')[0]
c=b.find_elements_by_class_name("fl_img")[0].click()
driver.close()
driver.switch_to.window(driver.window_handles[0])
driver.find_elements_by_class_name("play")[0].click()
sleep(5)
# driver.quit()
# driver = webdriver.chrome(r'C:\Users\Administrator.USER-20200615OM\AppData\Local\Google\Chrome\Application\chrome.exe')