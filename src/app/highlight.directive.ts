import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor ='#EDEDED';

  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('aqua');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }
  private highlight (color: string){
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
