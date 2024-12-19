import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'] // Corrected to styleUrls
})
export class UserLoginComponent {
  loginform!:FormGroup;
  constructor(private router:Router,private authservice:ApiService,private formbuilder: FormBuilder)
  {
    this.loginform=this.formbuilder.group(
      {
        login:["",Validators.required],
        password: ["", [Validators.required, Validators.minLength(5)]] 
      }
    );
  }

  async onSubmit() {
    if (this.loginform.invalid) {
      this.loginform.markAllAsTouched();
      return;
    }
  
    const { login, password } = this.loginform.value;
  
    const y=await this.authservice.AuthentificationUser(login, password)
      .then(
      response=>{
        if (response) {
            alert("Utilisateur authentifié avec succès ");
            this.router.navigate(["/user-menu"]);
          } else {
            alert("Échec de l'authentification de l'utilisateur.");
          }
        }
      ).catch(
        error =>{
          // alert("Erreur lors de l'authentification : " + (error.message || error));
          alert("Erreur lors de l'authentification !! " );

        }
      );
     
      }
          
  }
  
  

