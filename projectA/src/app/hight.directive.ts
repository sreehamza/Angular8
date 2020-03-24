import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHight]'
})
export class HightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
  this.change('blue');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.change(null);
  }
private change(color: string){
 this.el.nativeElement.style.backgroundColor= color;
}
}
