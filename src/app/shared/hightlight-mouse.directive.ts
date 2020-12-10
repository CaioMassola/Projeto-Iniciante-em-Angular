import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightlightMouse]'
})
export class HightlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){ 
    // this.render.setElementStyle(this.elementRef.nativeElement,'backgroundColor', 'red');
    this.backgroundColor = 'yellow'
    }

    @HostListener('mouseleave') onMouseLeave(){ 
      // this.render.setElementStyle(this.elementRef.nativeElement,'backgroundColor', 'white');
      this.backgroundColor = 'white'
    }

    @HostBinding('style.backgroundColor') backgroundColor: string;
  


  constructor(
    // public elementRef: ElementRef,
    // public render: Renderer
  ) { }

}
