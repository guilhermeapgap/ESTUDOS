import emoji
frase = input('qual seu nome? ')
if frase == 'guilherme':
    print(emoji.emojize('adoro esse nome :heart_eyes:', use_aliases=True))
else:
    print(emoji.emojize('nome comum esse seu :expressionless:', use_aliases=True))
print('\033[7;30;45m {}\033[m'.format(frase))