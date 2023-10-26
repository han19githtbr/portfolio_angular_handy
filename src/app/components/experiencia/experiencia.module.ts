import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaComponent } from './experiencia.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExperienciaComponent
  ],
  exports:[
    ExperienciaComponent
  ]
})
export class ExperienciaModule { }
