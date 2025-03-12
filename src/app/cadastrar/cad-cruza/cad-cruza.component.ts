import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { Cadelas } from 'src/app/interface/cadelas';
import { Cruzas } from 'src/app/interface/cruzas';
import { Machos } from 'src/app/interface/machos';
import { CadelasService } from 'src/app/service/cadelas.service';
import { CruzasService } from 'src/app/service/cruzas.service';
import { MachosService } from 'src/app/service/machos.service';

@Component({
  selector: 'app-cad-cruza',
  templateUrl: './cad-cruza.component.html',
  styleUrls: ['./cad-cruza.component.css']
})
export class CadCruzaComponent implements OnInit {
  formCruza;
  machos: string[] = [];
  cadelas: string[] = [];

  constructor(
    private fb: FormBuilder,
    private sCruzas: CruzasService,
    private sMachos: MachosService,
    private sCadelas: CadelasService
  ) {
      this.formCruza = this.fb.group({
        macho:["",[Validators.minLength(2),Validators.required]],
        femea:["",[Validators.minLength(2),Validators.required]],
        data:["",[Validators.minLength(2),Validators.required]]
      })
    }

  ngOnInit(){
    this.getNomes();
  }

  getNomes() {
    this.sMachos.get().subscribe({
      next: (data: Machos[]) => { 
        const dados = data.sort((a, b) => {
          return b.nome.localeCompare(a.nome);
        });
        dados.map(dados=>{this.machos.push(dados.nome);});
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    });

    this.sCadelas.get().subscribe({
      next: (data: Cadelas[]) => { 
        const dados = data.sort((a, b) => {
          return b.nome.localeCompare(a.nome);
        });
        dados.map(dados=>{this.cadelas.push(dados.nome);});
      },
      error: (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    });
  }

  salvar() {
    const cruza: Cruzas = { 
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      macho: this.formCruza.get('macho')?.value ?? '',
      femea: this.formCruza.get('femea')?.value ?? '',
      data: this.formCruza.get('data')?.value ?? ''
    };
    this.sCruzas.salvar(cruza).pipe(
      catchError((error) => {
        console.error("Erro ao salvar cruza:", error); 
        alert(`Erro ao salvar cruza: ${error.message}`); 
        return of(null);
      })
      ).subscribe((response) => { 
        if (response) {
          alert(`cruza de ${cruza.femea} com ${cruza.macho} salvo com sucesso!`);
          this.formCruza.reset();
        }
    });
  }
}
