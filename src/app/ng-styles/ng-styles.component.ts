import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  templateUrl: './ng-styles.component.html',
  styleUrls: ['./ng-styles.component.scss']
})
export class NgStylesComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit() {
  }
 
  onClick(){
    this.ativo = !this.ativo
  }
}
