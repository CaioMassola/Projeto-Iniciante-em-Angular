import { Directive,Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective  {

  @Input() set appNgElse(condicao: boolean){
  if(!condicao){
 this._ViewContainerRef.createEmbeddedView(this._TemplateRef)
  }else{
    this._ViewContainerRef.clear();
  }
  }

  constructor(
 public _TemplateRef: TemplateRef<any>,
 public _ViewContainerRef: ViewContainerRef
  ) {

   }

}
