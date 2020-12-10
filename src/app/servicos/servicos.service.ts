import { LogService } from './../shared/log.service';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  emitirCursoCriado = new EventEmitter<string>();

  private curso: string[] = ['Angular2','Java', 'C'];
  constructor(
    public logService: LogService
  ) { }

  getCursos(){
    this.logService.consoleLog('Obetendo informações');
    return this.curso;
  }

  addCurso(curso: string){
    this.logService.consoleLog('Criando Curso:'+ curso);
    this.curso.push(curso);
    this.emitirCursoCriado.emit(curso);

  }
}
