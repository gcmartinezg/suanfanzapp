import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrefixI } from 'src/app/shared/interfaces/PrefixI';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PrefijoService } from 'src/app/shared/services/prefijo.service';

@Component({
  selector: 'app-login-telefono',
  templateUrl: './login-telefono.component.html',
  styleUrls: ['./login-telefono.component.scss']
})
export class LoginTelefonoComponent implements OnInit {

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

  listaPrefijos: PrefixI[];
  constructor(
    private router:Router,
    private authService: AuthService,
    private prefijoService: PrefijoService
    ) { }

  ngOnInit(): void {
  
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  doLogin() {
    this.authService.login(this.user).subscribe(res => {
      console.log(res);
      this.router.navigate(['home']);
    }, err => {
      console.log(err);
    });
    console.log(this.user);
  }

  getPrefix(){
    this.prefijoService.getAll().subscribe(res => {
      this.listaPrefijos = res;
      console.log(this.listaPrefijos);
    }, err => {
      console.log(err);
    });
  }


}
