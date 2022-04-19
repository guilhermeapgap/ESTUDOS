

# preciso saber o webdriver do meu navegador ex:chromedriver e fazer o download

from selenium import webdriver # controlar o navegador
from selenium.webdriver.common.keys import Keys # usar teclado
from selenium.webdriver.common.by import By # localizar os items no navegador

navegador = webdriver.Chrome()
#navegador.get("https://www.google.com.br")
