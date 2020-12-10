import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.scss']
})
export class PipeTestComponent implements OnInit {


  anime: any = {
    anime: 'Darling the Franxx',
    personagens: 'Hiro/ZeroTwo',
    nEpisodio: 26,
    descricao: 'Um Jovem tenta pilotar um Franxx com uma Garota de cabelo rosa!',
    nota: 9.89789,
    dataLancamento: new Date(2018,4,21),
    url: 'www.crunchyroll.com/pt-br/darling-in-the-franxx'
  };

  animeLista: string[] = ['Sword Art Online', 'Naruto', 'Kimetsu no Yaiba']

  valorAsync = new Promise((resolve, reject)=> {setTimeout(()=> resolve('Valor Assincrono'),2000)
  });
  constructor() { }

  ngOnInit() {
  }

}
