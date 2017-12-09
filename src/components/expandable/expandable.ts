import { Component, Input, ViewChild, ElementRef, Renderer, ContentChild } from '@angular/core';


/**
 * Generated class for the ExpandableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent {

  @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
  @ViewChild('expandContent', {read: ElementRef}) expandContent;
  
  @Input('expanded') expanded;
  @Input('expandHeight') expandHeight;

  constructor(public renderer: Renderer) {

  }

  ngAfterViewInit(){
    let height = this.expandHeight? this.expandHeight : this.expandContent.nativeElement.offsetHeight
    this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', height + 'px');   
  }
}
