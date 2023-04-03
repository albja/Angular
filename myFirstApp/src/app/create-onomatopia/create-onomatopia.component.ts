import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string = "";

  @Output()
  sendOnomatopiaToApp: EventEmitter<string> = new EventEmitter(
  );

  sendOnomatopia(): void {
    this.sendOnomatopiaToApp.emit(this.newOnomatopia)
    this.newOnomatopia = ""
  };

}
