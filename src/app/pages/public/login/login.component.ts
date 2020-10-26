import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = "Hola Mundo";
  color: string = "red"

  user: UserI = {
    correo:'',
    nombre: '',
    apellido: '',
    contrasena: '',
    telefono: 0,
    idPrefijo: 0,
    descripcion: '',
    urlImagen: ''
  };

  constructor(
    private router:Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  doLogin() {
    this.authService.loginMail(this.user).subscribe(res => {
      console.log(res);
      this.router.navigate(['home']);
    }, err => {
      console.log(err);
    });
    console.log(this.user);
  }
}
