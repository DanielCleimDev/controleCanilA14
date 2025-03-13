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
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: "listarCadelas", component: CadelasComponent, canActivate: [AuthGuard] },
  { path: "listarMachos", component: MachosComponent, canActivate: [AuthGuard] },
  { path: "listarCruzas", component: CruzasComponent, canActivate: [AuthGuard] },
  { path: "listarNinhadas", component: NinhadasComponent, canActivate: [AuthGuard] },
  { path: "cadastrarCadela", component: CadCadelaComponent, canActivate: [AuthGuard] },
  { path: "cadastrarMacho", component: CadMachoComponent, canActivate: [AuthGuard] },
  { path: "cadastrarCruza", component: CadCruzaComponent, canActivate: [AuthGuard] },
  { path: "cadastrarNinhada", component: CadNinhadaComponent, canActivate: [AuthGuard] },
  { path: "cadastrarFilhote", component: CadFilhoteComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
