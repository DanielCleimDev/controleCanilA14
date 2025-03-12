import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { Cadelas } from 'src/app/interface/cadelas';
import { CadelasService } from 'src/app/service/cadelas.service';

@Component({
  selector: 'app-cad-cadela',
  templateUrl: './cad-cadela.component.html',
  styleUrls: ['./cad-cadela.component.css']
})
export class CadCadelaComponent {
  formCadela;
  sexoSelecionado = '';
  hoje: Date = new Date();

  
    constructor(private fb: FormBuilder,private sCadelas: CadelasService
    ) {
      this.formCadela = this.fb.group({
        nome:["",[Validators.minLength(2),Validators.required]],
        pai:["",[Validators.minLength(2),Validators.required]],
        mae:["",[Validators.minLength(2),Validators.required]],
        canilOrigem:["",[Validators.minLength(2),Validators.required]],
        dataNascimento:["",[Validators.minLength(2),Validators.required]],
        cor:["",[Validators.minLength(2),Validators.required]],
        raca:["",[Validators.minLength(2),Validators.required]],
        status:["",[Validators.minLength(2),Validators.required]]
      })
    }
    salvar() {
      const cadela: Cadelas = { 
        id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
        nome: this.formCadela.get('nome')?.value ?? '',
        pai: this.formCadela.get('pai')?.value ?? '',
        mae: this.formCadela.get('mae')?.value ?? '',
        canilOrigem: this.formCadela.get('canilOrigem')?.value ?? '',
        dataNascimento: this.formCadela.get('dataNascimento')?.value ?? '',
        cor: this.formCadela.get('cor')?.value ?? '',
        raca: this.formCadela.get('raca')?.value ?? ' ',
        status: this.formCadela.get('status')?.value ?? ' ',
        ativo: "1"
      };
      this.sCadelas.salvar(cadela).pipe(
        catchError((error) => {
          console.error("Erro ao salvar cadela:", error); 
          alert(`Erro ao salvar cadela: ${error.message}`); 
          return of(null);
        })
      ).subscribe((response) => { 
        if (response) {
          alert(`Cadela ${cadela.nome} salva com sucesso!`);
          this.formCadela.reset();
        }
      });
      
    }
}
