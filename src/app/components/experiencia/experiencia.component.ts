import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @Input()
  MinhasExperiencias:string = ""

  @Input()
  primeiraExperiencia:string = ""

  @Input()
  segundaExperiencia:string = ""

  @Input()
  fotoExperienciaPET:string = ""

  @Input()
  fotoExperienciaPGM:string = ""

  @Input()
  icone2:string = ""

  @Input()
  icone_work:string = ""

  @Input()
  fotoExperienciaCEA:string = ""

  @Input()
  icone_computador:string = ""

  @Input()
  terceiraExperiencia:string = ""

  constructor() { }

  ngOnInit() {
  }

}
