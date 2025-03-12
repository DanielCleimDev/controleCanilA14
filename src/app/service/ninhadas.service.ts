import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ninhadas } from '../interface/ninhadas';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NinhadasService {
  private apiUrl = "https://2ih8obvwec.execute-api.us-east-1.amazonaws.com/items";
  
    constructor(private http: HttpClient) { }
  
    salvar( obj: Ninhadas) {
      return this.http.put(this.apiUrl, { tabela: "ninhada", item: obj });
    }
  
    deletar(id: string) {
      const options = {
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          tabela: "ninhada",
          id: id
        }
      };
      return this.http.delete(this.apiUrl, options);
    }
  
    get(): Observable<Ninhadas[]> {
      const url = `${this.apiUrl}/ninhada`;
      return this.http.get<Ninhadas[]>(url);
    }
  }
  