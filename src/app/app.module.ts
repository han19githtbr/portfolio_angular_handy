import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenubarModule } from './components/menu-bar/menu-bar.module';
import { QuemsouModule } from './components/quemsou/quemsou.module';
import { FormacaoModule } from './components/formacao/formacao.module';
import { ExperienciaModule } from './components/experiencia/experiencia.module';
import { MeusprojetosModule } from './components/meusprojetos/meusprojetos.module';
import { FooterModule } from './components/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { BootcampDioModule } from './components/bootcamp/bootcamp-dio.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    QuemsouModule,
    FormacaoModule,
    ExperienciaModule,
    MeusprojetosModule,
    FooterModule,
    BrowserAnimationsModule,
    BootcampDioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
