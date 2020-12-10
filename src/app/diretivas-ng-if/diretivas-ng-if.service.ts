import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiretivasNgIfService {

  constructor() { }

  getDados(){
    return ['Alani', 'Gabi', 'Duda'];
  }
}
