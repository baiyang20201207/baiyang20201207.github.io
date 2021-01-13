# conding=utf-8
# @time  -
# @author baiyang
from selenium import webdriver
from time import sleep
from selenium.webdriver.common.action_chains import ActionChains
driver = webdriver.Chrome()
driver.maximize_window()
driver.get("https://www.bilibili.com/")
#点击舞蹈区
driver.find_element_by_xpath('//div[@id="primaryChannelMenu"]/span[5]/div/a').click()
#寻找街舞分类，跳转到
jiewu = driver.find_element_by_xpath('//*[@id="dance_hiphop"]/div[1]/div[1]/div[2]/div[1]')
#执行窗口滑动
driver.execute_script("arguments[0].scrollIntoView();",jiewu)
#等待一秒，让浏览器加载数据
sleep(1)
#点击街舞最新推荐
driver.find_element_by_xpath('//div[@id="dance_hiphop"]/div[1]/div[1]/div[2]/div[1]//a').click()
#获取窗口编号
windows=driver.window_handles
# 切换至最新窗口
driver.switch_to.window(windows[-1])
# 查找点赞
tool=driver.find_element_by_id('arc_toolbar_report')
like = tool.find_element_by_tag_name('div').find_element_by_class_name('like')

#等待加载
sleep(5)
#点击点赞
like.click()
# action=ActionChains(driver)
# action.move_to_element(like)
# action.perform()
# action.click(like)
# action.perform()
sleep(3)
driver.quit()