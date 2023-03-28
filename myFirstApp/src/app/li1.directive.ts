import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appLi1]'
})
export class Li1Directive {

  @HostBinding('class.changementDone') isClassOn: boolean = true;
  constructor() { }
  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.isClassOn = true;
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.isClassOn = false;
  }

}

