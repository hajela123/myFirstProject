import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name : string ='Rahul';
  age : number = 1;
  myArray =[1,2,3];
  myObj ={
    "name":"rahul",
    "age":"1",
  }
  myfunction(){
    
  }
}
