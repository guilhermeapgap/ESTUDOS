salario = float(input('Qual seu salario ? R$'))
aumento = float(input('Quantos % de aumento você ia receber? '))
total = salario + (salario * aumento / 100)
print('seu salario com o {}% de aumento sera R${}'.format(aumento,total))
