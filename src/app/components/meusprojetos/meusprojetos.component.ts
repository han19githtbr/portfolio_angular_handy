import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meusprojetos',
  templateUrl: './meusprojetos.component.html',
  styleUrls: ['./meusprojetos.component.css']
})
export class MeusprojetosComponent implements OnInit {

  @Input()
  Projetos:string = ""

  @Input()
  TituloProjeto1:string = ""

  @Input()
  TituloProjeto2:string = ""

  @Input()
  TituloProjeto3:string = ""

  @Input()
  TituloProjeto4:string = ""

  @Input()
  TituloProjeto5:string = ""

  @Input()
  TituloProjeto6:string = ""


  @Input()
  ButtonRepo1:string = ""

  @Input()
  ButtonDemo1:string = ""

  @Input()
  ButtonRepo2:string = ""

  @Input()
  ButtonDemo2:string = ""

  @Input()
  ButtonRepo3:string = ""

  @Input()
  ButtonDemo3:string = ""

  @Input()
  ButtonRepo4:string = ""

  @Input()
  ButtonDemo4:string = ""

  @Input()
  ButtonRepo5:string = ""

  @Input()
  ButtonDemo5:string = ""

  @Input()
  ButtonRepo6:string = ""

  @Input()
  ButtonDemo6:string = ""

  @Input()
  fotoProjeto1:string = ""

  @Input()
  fotoProjeto2:string = ""

  @Input()
  fotoProjeto3:string = ""

  @Input()
  fotoProjeto4:string = ""

  @Input()
  fotoProjeto5:string = ""

  @Input()
  fotoProjeto6:string = ""

  constructor() { }

  ngOnInit() {
  }

}
