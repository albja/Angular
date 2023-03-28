import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Bonjour';
  isAdmin: boolean = true;
  changeAdminStatue(): void {
    this.isAdmin = !this.isAdmin;
  }
}
