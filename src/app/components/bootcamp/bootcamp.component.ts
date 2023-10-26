import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.css']
})
export class BootcampComponent implements OnInit {

  @Input()
  CabecalhoBootcamp:string = ""

  @Input()
  fotoBootcamp:string = ""

  @Input()
  TituloBootCamp:string = ""

  constructor() { }

  ngOnInit() {
  }

}
