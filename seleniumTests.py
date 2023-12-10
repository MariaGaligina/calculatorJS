from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

#добираемся до ссылки на проект через мой github
driver.get('https://github.com/MariaGaligina/calculatorJS')
driver.find_element(By.LINK_TEXT, "Calculator").click()
print(f'title: {driver.title}')
assert driver.title == "Calculator"

#немножко поиграемся
seven = driver.find_element(By.ID, 'seven')
eight = driver.find_element(By.ID, 'eight')
nine = driver.find_element(By.ID, 'nine')
adding = driver.find_element(By.ID, 'adding')
multiplication = driver.find_element(By.ID, 'multiplication')
clear = driver.find_element(By.ID, 'clear')
answer = driver.find_element(By.ID, 'answer')
output = driver.find_element(By.ID, 'output')

#проверим присутствие некоторых кнопок
assert seven.is_displayed()
assert eight.is_displayed()
assert nine.is_displayed()
assert adding.is_displayed()
assert clear.is_displayed()
assert answer.is_displayed()

#проверяем функционал
nine.click()
adding.click()
seven.click()
answer.click()
assert output.text == '16'
time.sleep(1)
multiplication.click()
eight.click()
answer.click()
assert output.text == '128'
time.sleep(1)
print(f'answer: {output.text}')
clear.click()
assert output.text == '0'
time.sleep(2)

driver.quit()
