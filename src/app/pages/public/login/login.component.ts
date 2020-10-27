import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrefixI } from 'src/app/shared/interfaces/PrefixI';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PrefijoService } from 'src/app/shared/services/prefijo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title: string = "Hola Mundo";
  color: string = "red"
  isLoginMail: boolean = true;

  listaPrefijos: PrefixI[];

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
    private authService: AuthService,
    private prefijoService: PrefijoService,
    ) { }

  ngOnInit(): void {
    this.getPrefix();
  }

  getPrefix(){
    this.prefijoService.getAll().subscribe(res => {
      this.listaPrefijos = res;
      console.log(this.listaPrefijos);
    }, err => {
      console.log(err);
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  doLogin() {
    if(this.isLoginMail){
      this.authService.loginMail(this.user).subscribe(res => {
        console.log(res);
        this.router.navigate(['home']);
      }, err => {
        console.log(err);
      });
      console.log(this.user);
    } else {
      this.authService.loginPhone(this.user).subscribe(res => {
        console.log(res);
        this.router.navigate(['home']);
      }, err => {
        console.log(err);
      });
      console.log(this.user);
    }
  }

  setLoginMail(evt: any) {
    this.isLoginMail = evt.toElement.id === 'mail';
  }
}
