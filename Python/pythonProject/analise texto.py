nome = str(input('Qual é seu nome completo? ')).strip()
print('seu nome em maiusculas e:', nome.upper())
print('seu nome em minusculas é: ',nome.lower())
print('seu nome tem {} letras'.format(len(nome)- nome.count(' ')))
#essa forma de baixo também serve para contar com nâo e tão eficiente
#print('seu primeiro nome tem {} letras '.format(nome.find(' ')))
separa = nome.split()
print('seu primeiro nome e {} e ele tem {} letras'.format(separa[0], len(separa[0])))