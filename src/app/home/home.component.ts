import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email = "";
  senha = "";
  logado: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.auth.login(this.email, this.senha)){
			this.logado = true;
			return;
		}
    this.logado = false;
		alert("Login invalido");
		this.senha = "";
		this.email = "";
  }

  convidado(){
    this.auth.convidado();
    this.logado = true;
  }

}
