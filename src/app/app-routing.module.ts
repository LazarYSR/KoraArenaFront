import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomingComponent } from './welcoming/welcoming.component';
import { DashroleComponent } from './dashrole/dashrole.component';
import { RespLoginComponent } from './responsable/resp-login/resp-login.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserProfilComponent } from './user/user-profil/user-profil.component';
import { UserMenuComponent } from './user/user-menu/user-menu.component';
import { UserSearchterrainComponent } from './user/user-searchterrain/user-searchterrain.component';

const routes: Routes = [
  {path:"",component:WelcomingComponent},
  {path:"dashrole",component:DashroleComponent},
  {path:"resp-login", component:RespLoginComponent},
  {path:"user-login", component:UserLoginComponent},
  {path:"admin-login", component:AdminLoginComponent},
  {path:"user-profil", component:UserProfilComponent},
  {path:"user-menu", component:UserMenuComponent},
  {path:"user-searchterrain",component:UserSearchterrainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
