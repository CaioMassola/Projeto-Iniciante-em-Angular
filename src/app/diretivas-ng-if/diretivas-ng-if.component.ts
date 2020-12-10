import { DiretivasNgIfService } from './diretivas-ng-if.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ng-if',
  templateUrl: './diretivas-ng-if.component.html',
  styleUrls: ['./diretivas-ng-if.component.scss']
})
export class DiretivasNgIFComponent implements OnInit {
  namo: string[];
  namo2: string[] = ['Amanda', 'Rafaela', 'Eduarda'];
  cursos: string [] = ["Angular"];
  mostrarCurso: boolean = false;
  meuFavorito: boolean = false;
  constructor(
    public namoradasServices: DiretivasNgIfService
  ) { 
    this.namo = this.namoradasServices.getDados();
    for(let i = 0; i < this.namo2.length;i++){
     let amor = this.namo2[i];

    } 
   
  }
  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

  ngOnInit() {
        
  }
 

onMostrarCurso(){
  this.mostrarCurso = !this.mostrarCurso
}
}
