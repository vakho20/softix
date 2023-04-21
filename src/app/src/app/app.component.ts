import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { UserDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private http:HttpClient){}
      onSubmit(data: any): void {
          console.warn(data);
          this.http.post('https://jsonplaceholder.typicode.com/users' , data)
          .subscribe(()=>{
            console.warn('rezult' , data);
            
          })
          
      }
}
 