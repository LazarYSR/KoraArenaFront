import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashroleComponent } from './dashrole/dashrole.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomingComponent } from './welcoming/welcoming.component';
import { UserModule } from './user/user.module';
import { ResponsableModule } from './responsable/responsable.module';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashroleComponent,
    NavbarComponent,
    WelcomingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ResponsableModule,
    AdminModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
