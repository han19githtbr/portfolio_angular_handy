import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemsouComponent } from './quemsou.component';
import { QuemsouRoutingModule } from './quemsou-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QuemsouRoutingModule
  ],
  declarations: [
    QuemsouComponent
  ],
  exports: [
    QuemsouComponent
  ]
})
export class QuemsouModule { }
