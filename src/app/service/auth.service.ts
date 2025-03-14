import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken = "adm";

  constructor() { }

  estaAutenticado(): boolean {
		return !!sessionStorage.getItem("access-token");
	}

	login(email:string, senha:string):boolean{
		if(email === "adm@adm.com" && senha === "adm"){
			sessionStorage.setItem("access-token", this.accessToken);
			return true;
		}
		return false;
	}

  convidado(){
    sessionStorage.setItem("access-token", "CV");
  }

	logout(){
		sessionStorage.clear();
	}
}
