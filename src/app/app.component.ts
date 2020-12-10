import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  

  novoNome: String = 'Renan'
  title = 'projetoAngular';

  tarefa: any = {
    descricao: 'Descrição da tarefa',
    responsavel: null
  }


  apertaBotao(){
    alert("Hello")
  }
}
