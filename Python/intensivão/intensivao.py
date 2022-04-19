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

#
#time.sleep(5)
# posição do mouse
#print( pyautogui.position() )
pyautogui.click(x=1002, y=725)

pyautogui.click(x=852, y=690)
pyautogui.write("GUILHERME")
pyautogui.click(x=654, y=759)
pyautogui.click(x=834, y=727)
pyautogui.write("guilhermeapgap@hotmail.com")
pyautogui.click(x=654, y=759)
pyautogui.click(x=838, y=767)
pyautogui.write("esse e aapenas o começo de sua automação. paarabens!")
pyautogui.click(x=954, y=872)


