import pyautogui
import pyperclip
import time

#para poder fazer uma pauso entre cada comando
pyautogui.PAUSE = 1

pyautogui.press("win")
pyautogui.write("chrome")
pyautogui.press("enter")
pyautogui.hotkey("ctrl","t")
pyperclip.copy("curriculo-guilhermeap.netlify.app")
pyautogui.hotkey("ctrl", "v")
pyautogui.press("enter")