
#include<stdio.h>
#include<stdlib.h>
#include <string.h>


int menu(); //função do menu
void adicionarAluno(struct Lista*  Lista, char* nome, char * email, int ru, int posicao);
struct Lista* CriarLista(int  qtd);
void buscar(struct Lista* Lista);
struct Aluno { //estrutura heterogênea de  dados    
char nome[50], 
email[50];    
int ru;    
struct Aluno* prox;
};

struct Lista { //Lista de alunos     
int qtd;    
struct Aluno** total;
};

struct Lista* CriarLista(int  qtd); 
void adicionarAluno(struct Lista*  Lista, char *nome, char  *email, int ru, int posicao);

int main(){//Deve-se armazenar o nome do aluno, seu e- mail e seu RU. Para o armazenamento utilize uma estrutura heterogênea de dados    
Lista* ListaTemp = CriarLista(10);    
char nome1[20] = "joao" ;    
char email1[20] = "joao@emai l";        char nome2[20] = "maria ";    
char email2[20] = "maria@ema il";    
char nome3[20] = "Leona rdo";    
char email3[20] = "leonardo@ email";    char nome4[20] = "paulo ";    
char email4[20] = "paulo@ema il";    
char nome5[20] = "jonas ";    
char email5[20] = "jonas@ema il";    
char nome6[20] = "marci a";    
char email6[20] = "marcia@em ail";    
char nome7[20] = "miria m";    
char email7[20] = "miriam@em ail";    
char nome8[20] = "cheet os";    
char email8[20] = "cheetos@e mail";    
char nome9[20] = "rober ta";    
char email9[20] = "roberta@e mail";   


 adicionarAluno(ListaTemp, nome1, email1, 111111,0);    
 adicionarAluno(ListaTemp, nome2, email2, 222222,1);    
 adicionarAluno(ListaTemp, nome3, email3, 1984254,2);
 adicionarAluno(ListaTemp, nome4, email4, 33333,  3);    
 adicionarAluno(ListaTemp, nome5, email5, 34444,  4);    
 adicionarAluno(ListaTemp, nome6, email6, 35555,  5);    
 adicionarAluno(ListaTemp, nome7, email7, 36666,  6);    
 adicionarAluno(ListaTemp, nome8, email8, 37777,  7);    
 adicionarAluno(ListaTemp, nome9, email9, 38888,  8);



int continuar = 1;       
do    
{        
    printf("1.buscar \n" );        
    printf("0.Sair\n");        
    scanf_s("%d", &continuar);        
    system("cls || clear" ); //sempre limpar        
    switch (continuar)  //menu 
    {       
        case 1:                        buscar(ListaTemp);            break;        
        case 0:            
        return 0;           
        break;        
        default:            
        printf("Digite  uma opcao valida \n");        
        }    
        } 
        while (continuar);
        }
        struct Lista* CriarLista(int  qtd) //inicializa a lista 
        {    
            Lista* Lista = (struct  Lista *)malloc( sizeof(struct Lista ));    
            Lista->qtd = qtd;  
            Lista->total = (struct Aluno** )malloc(qtd  * sizeof(struct Aluno*));    
            for (int i = 0; i < qt d; i++)        
            Lista->total[i] = NULL; 
               return Lista;
               }


void adicionarAluno(struct Lista*  Lista, char *nome, char  *email, int ru, int po sicao){ //adiciona alunos na lista
    struct Aluno* NovoElemento = ( struct Aluno *)malloc(sizeof(struct Aluno)) ;    
    strcpy_s(NovoElemento->nome, nome);    strcpy_s(NovoElemento->email,   email);    
    NovoElemento->ru = ru;    NovoElemento->prox = NULL;    NovoElemento->prox = Li sta->to tal[posicao ];    Lista->total[posicao]  = NovoElemento;
    }



int menu() {//funcao menu    
int op, c;    
system("Cls");    
printf("1.buscar \n");    
printf("0.Sair\n");    
printf("Digite sua escolha: " );    
scanf_s("%d", &op);    
while ((c = getchar()) !=  '\n' && c != EOF)  {} // limpar o buffer do teclado.
system("Cls");    
return op;
}
void buscar(struct Lista* Lista)  //funcao buscar
{    
int num,c;    
printf("Digite o RU a ser buscado:  ");    scanf_s("%d", &num);    
while ((c = getchar()) !=  '\n' && c != EOF)  {} // sempre limpe o buffer do teclado.        
int v;    
for (v = 0; v < Lista ->qtd;  v++)    {        
    struct Aluno* ElementoVarredura =  Lista->total[v];               
    while (ElementoVarredura !=  NULL)        
    {            
        if(ElementoVarredura->ru ==  num){ //  mostra o  aluno digitado na busca                
        printf("nom e: %s\n ", ElementoVarredura->nome);                
        printf("ema il: %s\n ", ElementoVarredura->email);                
        printf("ru:  %d\n ", ElementoVarredura->ru);                
        system("pau se");                
        system("Cls ");            
        }            
        ElementoVarredura = ElementoVarredura->prox;        
            }        
        printf("\n");    
        }
}