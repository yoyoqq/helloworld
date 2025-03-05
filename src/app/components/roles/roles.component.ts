import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule], // FormusModule event binding 
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName : string = "firstName";
  name: string = "Angular tutorial";
  angularVersion = "Version 18"
  version: number = 12;   // strong value type 
  isACtive : boolean = true;
  
  inputType: string = "radio"
  selectedState: string = "";


  // create functions 
  showWelcomeAlert(){
    alert("welcome to angular tutorial");
  }
  showMessage(message: string){
    alert(message);
  }
}
