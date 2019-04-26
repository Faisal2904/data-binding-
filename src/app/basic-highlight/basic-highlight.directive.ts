import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input} from '@angular/core'
@Directive({
  selector:'[appbasicHighlight]'

})

export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef:ElementRef, private renderer:Renderer2){
  
  }
 
  @Input() defaultColor:string='transparent';
   @Input() highlightColor:string='blue';
    @HostBinding('style.backgroundColor') backgroundcolor:string=this.defaultColor;
  ngOnInit(){
      console.log('in directive');
  //  this.elementRef.nativeElement.style.backgroundColor='green';
   // this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'green')//using renderer

  }

  @HostListener('mouseenter') mouseOver(eventData:Event){
   //this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'green',false,false);
   this.backgroundcolor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData:Event){
  //this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent',false,false);
  this.backgroundcolor=this.defaultColor;
  }


}