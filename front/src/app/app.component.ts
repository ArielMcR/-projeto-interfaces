import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "Marcelo"; /*Podemos criar variáveis aqui e apresentar lá no app html*/ 
  idade:number = 19;
  peso = "75 Kilos"; 
  ocupacao = "Professor";
  local = "IFPR";
  title = 'estudos-angular';
}
