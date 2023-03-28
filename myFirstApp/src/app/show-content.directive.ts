import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowContent]'
})
export class ShowContentDirective {

  @Input() set appShowContent(showList: boolean) {
    showList = true;
    if (showList) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }


  constructor(
    private tplRef: TemplateRef<any>,
    private vwRef: ViewContainerRef) { }
}
