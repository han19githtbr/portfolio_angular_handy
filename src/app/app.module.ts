import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './components/dashboard/dashboard.module';

//import { HomeComponent } from './pages/home/home.component';
//import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//import { HttpClient } from '@angular/common/http';

/*export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}*/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    
    /*TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
