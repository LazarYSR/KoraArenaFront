import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environements/environement.service';
import { User } from '../Model/User.model';
import { lastValueFrom } from 'rxjs';
import { Secteur } from '../Model/Secteur.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

 
  
  public async AuthentificationUser(login: string, password: string): Promise<User> {
    try{
        // const params = new HttpParams().set("login", login).set("password", password);
        const user =await lastValueFrom(this.http.get<User>(environment.apiUrl + "/users/auth-user/"+login+"/"+password));
        return user;
    }catch(error)
    {
      throw error;
    }
  
  }
  public async TousSectorsParVille(ville:string):Promise<Secteur[]>
  {
    try{
      // const params = new HttpParams().set("login", login).set("password", password);
      const secteurs =await lastValueFrom(this.http.get<Secteur[]>
        (environment.apiUrl + "/terrains/get-secteurs/"+ville));
      return secteurs;
  }catch(error)
  {
    throw error;
  }
  }
  
}
