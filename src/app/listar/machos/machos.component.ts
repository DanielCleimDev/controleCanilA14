import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { Machos } from 'src/app/interface/machos';
import { MachosService } from 'src/app/service/machos.service';

declare var $: any; // Para usar jQuery

@Component({
  selector: 'app-machos',
  templateUrl: './machos.component.html',
  styleUrls: ['./machos.component.css']
})
export class MachosComponent implements OnInit{
  formMacho;
  machos: Machos[] = [];

    constructor(private fb: FormBuilder,private sMachos: MachosService){
      this.formMacho = this.fb.group({
        id:["",[Validators.minLength(2)]],
        ativo:["",[Validators.minLength(1)]],
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
  
    ngOnInit(){
      this.get();
    }

    calcularIdade(obj:|Machos) {
        const dataNascimento = new Date(obj.dataNascimento);
        const dataAtual = new Date();
    
        let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
        let meses = dataAtual.getMonth() - dataNascimento.getMonth();
    
        if (meses < 0 || (meses === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
          idade--;
          meses += 12;
        }
    
        if(idade == 0){
          if(meses > 1){
            return `${meses} meses`;
          }else{
            return `${meses} mês`;
          }
        } else if (idade == 1){
          if (meses == 1) {
            return `${idade} ano e ${meses} mês`;
          }else if (meses >1){
            return `${idade} ano e ${meses} meses`;
          }else{
            return `${idade} ano`;
          }
        }else{
          if (meses > 1) {
            return `${idade} anos e ${meses} meses`;
          }else if (meses == 1){
            return `${idade} anos ${meses} mês`;
          }else{
            return `${idade} anos`;
          }
        }
      }
  
    get() {
      this.sMachos.get().subscribe({
        next: (data: Machos[]) => { 
          this.machos = [...data.sort((a, b) => {
            return new Date(b.dataNascimento).getTime() - new Date(a.dataNascimento).getTime();
          })];
        },
        error: (error) => {
          console.error('Erro ao buscar dados:', error);
        }
      });
    }

    deletar(id:any){
      if(confirm("Confirma a exclusão?")){
        this.sMachos.deletar(id).pipe(
          catchError((error) => {
          console.error("Erro ao deletar:", error); 
          alert(`Erro ao deletar: ${error.message}`); 
          return of(null);
        })
        ).subscribe((response) => { 
          if (response) {
            alert(`Macho deletado com sucesso!`);
            this.machos.splice(this.machos.findIndex(objeto => objeto.id === id), 1);
            this.machos = [...this.machos];
          }
        });
      }
    }

    salvar() {
      const macho: Machos = { 
        id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
        nome: this.formMacho.get('nome')?.value ?? '',
        pai: this.formMacho.get('pai')?.value ?? '',
        mae: this.formMacho.get('mae')?.value ?? '',
        canilOrigem: this.formMacho.get('canilOrigem')?.value ?? '',
        dataNascimento: this.formMacho.get('dataNascimento')?.value ?? '',
        cor: this.formMacho.get('cor')?.value ?? '',
        raca: this.formMacho.get('raca')?.value ?? ' ',
        ativo: "1"
      };
      this.sMachos.salvar(macho).pipe(
        catchError((error) => {
          console.error("Erro ao salvar Macho:", error); 
          alert(`Erro ao salvar Macho: ${error.message}`); 
          return of(null);
        })
      ).subscribe((response) => { 
        if (response) {
          alert(`Macho ${macho.nome} salvo com sucesso!`);
          this.formMacho.reset();
          this.get();
        }
      });
      
    }


    editar() {
    
        let machoEditado: Machos= { 
          id: this.formMacho.get('id')?.value ?? '',
          ativo: this.formMacho.get("ativo")?.value ?? '',
          nome: this.formMacho.get('nome')?.value ?? '',
          pai: this.formMacho.get('pai')?.value ?? '',
          mae: this.formMacho.get('mae')?.value ?? '',
          canilOrigem: this.formMacho.get('canilOrigem')?.value ?? '',
          dataNascimento: this.formMacho.get('dataNascimento')?.value ?? '',
          cor: this.formMacho.get('cor')?.value ?? '',
          raca: this.formMacho.get('raca')?.value ?? ' ',
        };
    
        this.sMachos.salvar(machoEditado).pipe(
          catchError((error) => {
            console.error("Erro ao Edtar macho:", error); 
            alert(`Erro ao Editar macho: ${error.message}`); 
            return of(null);
          })
        ).subscribe((response) => { 
          if (response) {
            this.machos = this.machos.map(macho => {
              if (macho.id === machoEditado.id) {
                return machoEditado;
              } else {
                return macho;
              }
            });
          }
          alert(`macho ${machoEditado.nome} Editado com sucesso!`);
          $("#modalEditar").modal('hide');
        });
      }
    
      abrirModalEditar(macho:Machos) {
        this.formMacho.patchValue({
          id: macho.id,
          ativo: macho.ativo,
          nome: macho.nome,
          mae: macho.mae,
          pai: macho.pai,
          canilOrigem: macho.canilOrigem,
          cor: macho.cor,
          raca: macho.raca,
          dataNascimento: macho.dataNascimento
        });
        $("#modalEditar").modal('show');
      }

  }
