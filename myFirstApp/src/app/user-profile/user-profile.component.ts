import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name : 'J',
    firstName : 'Alban',
    age : 33,
    quote :"",
    photo : "https://randomuser.me/api/portraits/lego/6.jpg",
 

  
  };
  displayUserAge= false;
  DisplayAge() {
    this.displayUserAge = !this.displayUserAge }

}


