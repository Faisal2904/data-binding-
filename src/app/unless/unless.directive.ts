import {Directive,Input,TemplateRef,ViewContainerRef,OnInit} from '@angular/core'
@Directive({
  selector:'[appunless]'

})

export class UnlessDirective implements OnInit{

  @Input() set appunless(condition:boolean){
    if(!condition){
     this.vcRef.createEmbeddedView(this.templateRef);
    }else{
               this.vcRef.clear();
    }

  }

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef){

  }

}