pd = float(input(' qual o valor do seu produto? '))
pc = float(input('quantos porcento de desconto? '))
des = pd * pc / 100
valor = pd - des
print('o seu produ valia {} más com {}% de desconto ele vale exatamente {:.3f} '.format(pd,pc, valor))
