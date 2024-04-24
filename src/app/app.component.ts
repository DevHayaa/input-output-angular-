import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'myapp';
  usersArray:any[]=[];
  headArray = [
    {'Head': 'User Name', 'FieldName': 'name'},
    {'Head': 'Email', 'FieldName': 'email'},
    {'Head': 'contact', 'FieldName': 'phone'},
    {'Head': 'Website', 'FieldName': 'website'},
    {'Head': 'Action', 'FieldName': ''}
   ];
   
  constructor(private http: HttpClient){}
 
    ngOnInit(): void {
       this.getUsers();
    }
    
    getUsers(){
      this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
        this.usersArray = result;
      })
    }
    editUser(user:any){
      console.log("Updated Successfully")
    }
    deleteUser(user:any){
      console.log("Deleted Successfully")
      
    }
    filteredDataReceived(filteredData: any[]) {
      console.log("Filtered data received:", filteredData);
    }
}


