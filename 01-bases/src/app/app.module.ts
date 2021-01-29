import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule }  from './heroes/heroes.module';
import { ContadorComponent } from './contador/contador/contador.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
