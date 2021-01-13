# conding=utf-8
# @time  -
# @author baiyang
import unittest
from selenium import webdriver
from time import sleep

class login(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.get("http://www.testingedu.com.cn:8000/Home/user/login.html")

    def tearDown(self):
        self.driver.quit()

    def test_login_normal(self):
        #正常登录
        self.driver.find_element_by_id('username').send_keys('13800138006')
        self.driver.find_element_by_id('password').send_keys('123456')
        self.driver.find_element_by_id('verify_code').send_keys('1')
        self.driver.find_element_by_name('sbtbutton').click()
        sleep(0.5)
        url=self.driver.current_url
        nom_url='http://www.testingedu.com.cn:8000/Home/User/index.html'
        self.assertEqual(nom_url,url)

    def test_login_name_pwd_is_empty(self):
        #用户名，密码为空
        self.driver.find_element_by_id('verify_code').send_keys('1')
        self.driver.find_element_by_name('sbtbutton').click()
        sleep(0.5)
        con=self.driver.find_element_by_class_name('layui-layer-content').text
        self.assertEqual('用户名不能为空!',con)

    def test_login_name_len_is_10(self):
        #用户名，为10为
        self.driver.find_element_by_id('username').send_keys('1380013800')
        self.driver.find_element_by_id('password').send_keys('123456')
        self.driver.find_element_by_id('verify_code').send_keys('1')
        self.driver.find_element_by_name('sbtbutton').click()
        sleep(0.5)
        con=self.driver.find_element_by_class_name('layui-layer-content').text
        self.assertEqual('账号格式不匹配!',con)

    def test_login_name_len_is_12(self):
        #用户名，为12为
        self.driver.find_element_by_id('username').send_keys('138001380012')
        self.driver.find_element_by_id('password').send_keys('123456')
        self.driver.find_element_by_id('verify_code').send_keys('1')
        self.driver.find_element_by_name('sbtbutton').click()
        sleep(0.5)
        con=self.driver.find_element_by_class_name('layui-layer-content').text
        self.assertEqual('账号格式不匹配!',con)

    def test_login_pwd_is_error(self):
        #密码错误
        self.driver.find_element_by_id('username').send_keys('13800138006')
        self.driver.find_element_by_id('password').send_keys('1234567')
        self.driver.find_element_by_id('verify_code').send_keys('1')
        self.driver.find_element_by_name('sbtbutton').click()
        sleep(0.5)
        con=self.driver.find_element_by_class_name('layui-layer-content').text
        self.assertEqual('密码错误!',con)

    def test_login_pwd_verify_code_is_error(self):
        #验证码错误
        self.driver.find_element_by_id('username').send_keys('13800138006')
        self.driver.find_element_by_id('password').send_keys('123456')
        self.driver.find_element_by_id('verify_code').send_keys('13')
        self.driver.find_element_by_name('sbtbutton').click()
        sleep(0.5)
        con=self.driver.find_element_by_class_name('layui-layer-content').text
        self.assertEqual('验证码错误!',con)

if __name__ == "__main__":
    unittest.main()