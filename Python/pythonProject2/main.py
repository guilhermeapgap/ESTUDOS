import random, pygame
pygame.init()
nome = input('Digite o primeiro nome: ')
nome1 = input('digite o segundo nome: ')
nome2 = input('digite o terceiro nome: ')
lista = [nome,nome1,nome2]
escolhido = random.choice(lista)
if escolhido == 'guilherme':
    print('o escolhido e o lindo do...')
    pygame.mixer.music.load('music.mp3')
    pygame.mixer.music.play()
    print('\033[7;32m', escolhido, '\033[m')
    input()
else:
    print('o escolhido e o gay do...')
    print('\033[;31m', escolhido,'\033[m''\033[34m !!!\033[m')
    pygame.mixer.music.load('musicgabriel.mp3')
    pygame.mixer.music.play()
    input()
print ('---\033[;32m ISSO E TUDO PESSOAL\033[m !!! :smile: ---')
