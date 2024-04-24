import { CommonModule } from '@angular/common';
import { Component, OnInit , Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

@Input()HeadArray :any[] = [];
@Input()UserArray :any[] = [];
@Output() onEdit =new EventEmitter<any>();
@Output() onDelete =new EventEmitter<any>();


filteredData:any [] =[];
searchBox: string='';
constructor(){
  
}
  ngOnInit(): void {
    this.filteredData = this.UserArray;
  }

  onSearchChange(searchval:string){
    this.filteredData = this.UserArray.filter((searchData:any)=>{
      const values = Object.values(searchData);
      let found = false;
      values.forEach((val:any)=>{
        if(val.toString().toLowerCase().indexOf(searchval)>-1){
          found = true;
          
        }
      });
      
        return found;
     
    });
   
  }

  edit(user:any){
     this.onEdit.emit(user);
     

  }
 delete(user:any){
  this.onDelete.emit(user)
  
  
  
  }
}
