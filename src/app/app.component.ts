import { Component, OnInit } from '@angular/core';
import { UsersService} from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public listaUsuarios:any = []

  constructor(private UsersData:UsersService){
  }

  ngOnInit():void{
    this.getDataFromAPI()
  }

  getDataFromAPI(){
    this.UsersData.getData().subscribe((res)=>{
      console.log(res)
      this.listaUsuarios = res;
    })
  }
}
