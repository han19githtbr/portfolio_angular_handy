import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css']
})
export class FormacaoComponent implements OnInit {

  constructor() { }

  @Input()
  MinhaFormacao:string = ""

  @Input()
  fotoFormacao:string = ""

  @Input()
  tituloMeFormei:string = ""

  @Input()
  nomeCurso:string = ""

  @Input()
  nomeUniversidade:string = ""

  @Input()
  anoConclusao:string = ""

  @Input()
  icone1:string = ""

  @Input()
  icone2:string = ""

  @Input()
  icone3:string = ""


  ngOnInit() {
  }

}
