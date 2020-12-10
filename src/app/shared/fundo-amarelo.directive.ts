import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    public elementRef: ElementRef,
    public render: Renderer
    
  ) { 
    // this.elementRef.nativeElement.style.backgroundColor = 'red'
    this.render.setElementStyle(this.elementRef.nativeElement,'backgroundColor', 'red')
  }

}
