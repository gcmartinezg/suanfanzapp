import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrefixI } from 'src/app/shared/interfaces/PrefixI';
import { UserI } from 'src/app/shared/interfaces/UserI';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PrefijoService } from 'src/app/shared/services/prefijo.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // userForm = new FormGroup({
  //   email: new FormControl('pabhoz@gmail.com', Validators.required),
  //   username: new FormControl('', Validators.required),
  //   name: new FormControl('', Validators.required),
  //   lname: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  //   favNumber: new FormControl(''),
  // });

  user: UserI = {
    correo: '',
    contrasena: '',
    telefono: 0,
    idPrefijo: 1,
    nombre: '',
    apellido: '',
    descripcion: '',
    urlImagen: ''
  };

  listaPrefijos: PrefixI[];

  constructor(
    private router:Router, 
    private authService:AuthService,
    private prefijoService: PrefijoService,
    private userService: UserService
    ) { }

  

  ngOnInit(): void {
    this.getPrefix();
    console.log(this.listaPrefijos);
  }

  doRegister(e) {
    e.preventDefault();


    console.log(this.user);
    this.userService.save(this.user).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });

    //this.authService.login(user);

    this.router.navigate(['login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
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
