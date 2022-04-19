import random
n1 = input('primeiro nome: ')
n2 = input('segundo nome: ')
n3 = input('terceiro nome: ')
lista = [n3, n2, n1]
ordem = random.shuffle(lista)
print('a ordem será')
print(lista)
