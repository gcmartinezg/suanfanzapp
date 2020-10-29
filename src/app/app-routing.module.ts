import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/private/home/home.component';
import { HomeModule } from './pages/private/home/home.module';
import { LoginTelefonoComponent } from './pages/public/login-telefono/login-telefono.component';
import { LoginComponent } from './pages/public/login/login.component';
import { PortalComponent } from './pages/public/portal/portal.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'portal', component: PortalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login-telefono', component: LoginTelefonoComponent },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, HomeModule]
})
export class AppRoutingModule { }
