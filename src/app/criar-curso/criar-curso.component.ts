import { ServicosService } from './../servicos/servicos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(
    public cursoService: ServicosService
  ) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso: string){
    this.cursoService.addCurso(curso)
  
  }

}
