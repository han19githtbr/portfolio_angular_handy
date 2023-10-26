import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootcampComponent } from './bootcamp.component';

@NgModule({
  declarations: [
    BootcampComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BootcampComponent
  ]
})
export class BootcampDioModule { }
