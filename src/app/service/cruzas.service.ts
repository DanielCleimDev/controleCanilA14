import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cruzas } from '../interface/cruzas';

@Injectable({
  providedIn: 'root'
})
export class CruzasService {
  private apiUrl = "https://2ih8obvwec.execute-api.us-east-1.amazonaws.com/items";

  private tk = sessionStorage.getItem("access-token") === "CV" ? "CV": "";
  
    constructor(private http: HttpClient) { }
  
    salvar( obj: Cruzas) {
      return this.http.put(this.apiUrl, { tabela: `${this.tk}cruza`, item: obj });
    }
  
    deletar(id: string) {
      const options = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          tabela: `${this.tk}cruza`,
          id: id
        }
      };
      return this.http.delete(this.apiUrl, options);
    }
  
    get(): Observable<Cruzas[]> {
      const url = `${this.apiUrl}/${this.tk}cruza`;
      return this.http.get<Cruzas[]>(url);
    }
  }
  