import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSreenath]'
})
export class SreenathDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.change1('red');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.change1(null);
  }

  private change1(color: string){
   this.el.nativeElement.style.backgroundColor=color;
  }

}
