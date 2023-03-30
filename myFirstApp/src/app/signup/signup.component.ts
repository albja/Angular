import { Component } from '@angular/core';
import { User } from 'src/model/user'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  model: User = new User("", "", "", "");
  constructor() { }
  onSubmit(): void {

    console.log('Votre compte a bien été enregistré');
  }

}
