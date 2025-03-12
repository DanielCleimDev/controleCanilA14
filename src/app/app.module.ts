import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadCadelaComponent } from './cadastrar/cad-cadela/cad-cadela.component';
import { CadCruzaComponent } from './cadastrar/cad-cruza/cad-cruza.component';
import { CadFilhoteComponent } from './cadastrar/cad-filhote/cad-filhote.component';
import { CadMachoComponent } from './cadastrar/cad-macho/cad-macho.component';
import { CadNinhadaComponent } from './cadastrar/cad-ninhada/cad-ninhada.component';
import { CadelasComponent } from './listar/cadelas/cadelas.component';
import { CruzasComponent } from './listar/cruzas/cruzas.component';
import { MachosComponent } from './listar/machos/machos.component';
import { NinhadasComponent } from './listar/ninhadas/ninhadas.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CadCadelaComponent,
    CadCruzaComponent,
    CadFilhoteComponent,
    CadMachoComponent,
    CadNinhadaComponent,
    CadelasComponent,
    CruzasComponent,
    MachosComponent,
    NinhadasComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
