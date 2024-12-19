import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashrole',
  templateUrl: './dashrole.component.html',
  styleUrl: './dashrole.component.css'
})
export class DashroleComponent {
  constructor(private router:Router)
  {}

  goToUser()
  {
    this.router.navigate(["/user-login"]);
  }
  goToAdmin()
  {
    this.router.navigate(["/admin-login"]);
  }
  goToResponsable()
  {
    this.router.navigate(["/resp-login"]);
  }
}
