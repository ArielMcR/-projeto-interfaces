## projeto-fullstack-web

# Passando dados dos pais para os filhos

1.0 - Criando as variáveis
básicamente vamos passar as variáveis criadas no componente "pai" para os filhos
para isso definimos essa variáveis lá no app.component.ts que nesso caso foi criado
as variáveis nome, peso, idade, ocupação e etc.

1.1 - Passando as variáveis para a classe filho
<app-parent-data><app-parent-data> dentro desse comando nós vamos passar as variáveis, isto é
<app-parent-data [nome]="nome" [idade]="idade" [peso]="peso" [ocupacao]="ocupacao" [local]="local" ></app-parent-data>

1.2 - depois de passada a variável devemos ir no parent-data.component.ts e "puxar" a biblioteca
Input, para que possamos pegar os valores passados e depois configurar as variáveis e falar para o
Angular que elas serão preenchidas em breve

# Modos de criar as variáveis no filho

1.0 - Nós temos 2 modos de fazer isso exemplo desse código nós temos:
@Input() nome:string = '';
@Input() idade:number = 0;
@Input() peso:string= '';
@Input() ocupacao:string = '';
@Input() local:string = '';

Mas também poderia ser
@Input() nome:string!;
@Input() idade:number!;
@Input() peso:string!;
@Input() ocupacao:string!;
@Input() local:string!;

Ambos irão funcionar!
