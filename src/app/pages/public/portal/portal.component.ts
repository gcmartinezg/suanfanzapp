import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToNumber() {
    this.router.navigate(['/login-telefono']);
  }

  goLogin() {
    
    this.router.navigate(['/login']);
   
}
}
