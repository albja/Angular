import { Component } from '@angular/core';
import { User } from 'src/model/user'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  showInfos = false;

  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };
  showRecap(): void {
    this.showInfos = !this.showInfos;
    console.log(this.showInfos)
  }
  model: User = new User("", "", "", "");
  constructor() { }
  onSubmit(): void {

    console.log(this.model);

  }


}
