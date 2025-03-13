import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadCadelaComponent } from './cadastrar/cad-cadela/cad-cadela.component';
import { CadCruzaComponent } from './cadastrar/cad-cruza/cad-cruza.component';
import { CadFilhoteComponent } from './cadastrar/cad-filhote/cad-filhote.component';
import { CadMachoComponent } from './cadastrar/cad-macho/cad-macho.component';
import { CadNinhadaComponent } from './cadastrar/cad-ninhada/cad-ninhada.component';
import { HomeComponent } from './home/home.component';
import { CadelasComponent } from './listar/cadelas/cadelas.component';
import { CruzasComponent } from './listar/cruzas/cruzas.component';
import { MachosComponent } from './listar/machos/machos.component';
import { NinhadasComponent } from './listar/ninhadas/ninhadas.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: "listarCadelas", component: CadelasComponent },
  { path: "listarMachos", component: MachosComponent },
  { path: "listarCruzas", component: CruzasComponent },
  { path: "listarNinhadas", component: NinhadasComponent },
  { path: "cadastrarCadela", component: CadCadelaComponent },
  { path: "cadastrarMacho", component: CadMachoComponent },
  { path: "cadastrarCruza", component: CadCruzaComponent },
  { path: "cadastrarNinhada", component: CadNinhadaComponent },
  { path: "cadastrarFilhote", component: CadFilhoteComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
