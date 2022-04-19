import pandas as pd
import plotly.express as px
from datetime import date

dia_atual = date.today().day
tabela = pd.read_excel("numeros.xlsx")
somagasto = tabela["Valor do gasto"].sum()
somaganho = tabela["valor do ganho de hoje"].sum()
valorrestante = somaganho - somagasto
diasgastos = pd.DataFrame(tabela)
diasdomes = tabela["Data"].count()
diasfaltantes = diasdomes - dia_atual
pordia = valorrestante / diasfaltantes


#print(tabela)
freq = diasgastos.groupby(['Gastou hoje?']).count()#quantos dias gastou e quantos não gastou
print(freq)
print("")
print('soma de todos os gastos mensais foram:',somagasto)
print("")
print('A soma de todos os meus ganhos foram:',somaganho)
print("")
print('Ainda me resta:', valorrestante)
print("")
print('Saldo diario: {:.1f}'.format(pordia))



#para repetir o codigo varias vezes preciso da um tab e colocar a linha abiaixo
for coluna in ['Gasto','Gastou hoje?']:# se eu quiser graficos em todas as colunas tabela.columns:
   grafico = px.histogram(tabela, x=coluna, color="Gastou hoje?", title="Analise grafica")
   grafico.show()#exibir o grafico


while (True):
    fechar_terminal = input("")
