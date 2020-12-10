import { ServicosService } from './servicos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {


  // cursos: string[]=['Angular2', 'Java', 'C']
  cursos: string[];
  constructor(
    public cursoService: ServicosService
    ) { 

    }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    this.cursoService.emitirCursoCriado.subscribe(

      curso => console.log(curso)

    );
  }



}
