import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quemsou',
  templateUrl: './quemsou.component.html',
  styleUrls: ['./quemsou.component.css']
})
export class QuemsouComponent implements OnInit {

  constructor() { }

  @Input()
  fotoQuemSou:string = ""

  @Input()
  tituloQuemSou:string = ""

  @Input()
  descricaoQuemSou:string = ""

  @Input()
  interesses:string = ""

  @Input()
  QuemSou:string = ""

  @Input()
  icone1Interesses:string = ""

  @Input()
  icone2Interesses:string = ""

  @Input()
  icone3Interesses:string = ""

  @Input()
  icone4Interesses:string = ""

  @Input()
  icone5Interesses:string = ""

  
  ngOnInit() {
  }

}
