import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machos } from '../interface/machos';

@Injectable({
  providedIn: 'root'
})
export class MachosService  {
  private apiUrl = "https://2ih8obvwec.execute-api.us-east-1.amazonaws.com/items";

  private tk = sessionStorage.getItem("access-token") === "CV" ? "CV": "";
  
    constructor(private http: HttpClient) { }
  
    salvar( obj: Machos) {
      return this.http.put(this.apiUrl, { tabela: `${this.tk}macho`, item: obj });
    }
  
    deletar(id: string) {
      const options = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          tabela: `${this.tk}macho`,
          id: id
        }
      };
      return this.http.delete(this.apiUrl, options);
    }
  
    get(): Observable<Machos[]> {
      const url = `${this.apiUrl}/${this.tk}macho`;
      return this.http.get<Machos[]>(url);
    }
  }
  