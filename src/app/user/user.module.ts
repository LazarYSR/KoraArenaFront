import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { UserProfilComponent } from './user-profil/user-profil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserSearchterrainComponent } from './user-searchterrain/user-searchterrain.component';



@NgModule({
  declarations: [
    NavComponent,
    UserLoginComponent,
    UserProfilComponent,
    UserMenuComponent,
    UserSearchterrainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
