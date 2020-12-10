import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {

  @HostListener('mouseenter') onMouseOver(){ 
    // this.render.setElementStyle(this.elementRef.nativeElement,'backgroundColor', 'red');
    this.backgroundColor = this.hightColor
    }

    @HostListener('mouseleave') onMouseLeave(){ 
      // this.render.setElementStyle(this.elementRef.nativeElement,'backgroundColor', 'white');
      this.backgroundColor = this.semCor
    }

    @HostBinding('style.backgroundColor') backgroundColor: string;

    @Input()hightColor: string = 'green';
    @Input()semCor: string = 'white';

  constructor() { }

}
