import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Bienvenue sur le site de Alban';
  onomatopoeiaList: string[] = ['ah', 'surprise'];
  onReceiveNewOnomatopia(newOne: string): void {
    this.onomatopoeiaList.push(newOne)
  }

}
