import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar.component';
import { MenubarRoutingModule } from './menu-bar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MenubarRoutingModule
  ],
  declarations: [
    MenuBarComponent
  ],
  exports: [
    MenuBarComponent
  ]
})
export class MenubarModule { }
