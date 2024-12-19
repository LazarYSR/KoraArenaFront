import { Component ,OnInit} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Secteur } from '../../Model/Secteur.model';


@Component({
  selector: 'app-user-searchterrain',
  templateUrl: './user-searchterrain.component.html',
  styleUrl: './user-searchterrain.component.css'
})
export class UserSearchterrainComponent implements OnInit {
  searchkey!:FormGroup;
  secteurs : Secteur[]=[];
  constructor (private apiservice:ApiService,private formbuilder:FormBuilder)
  {

  }
ngOnInit(): void {
    this.searchkey=this.formbuilder.group(
      {
        ville:["",Validators.required]
      }
    );
}
  async Search()
  {
    if(this.searchkey.valid)
    {
      const {ville}=this.searchkey.value;

      this.secteurs=await this.apiservice.TousSectorsParVille(ville);
    }
    
  }

}
