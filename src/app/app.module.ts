import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Tarea:
//Crear un módulo llamado contadorModule
//declaraciones, y exportaciones

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
    //importar aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
