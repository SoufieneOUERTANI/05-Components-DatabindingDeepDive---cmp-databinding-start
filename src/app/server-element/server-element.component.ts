import { Component, ElementRef, Input, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ServerElementComponent {

  @Input('srvElement') element : { type: string, name : string, content : string};
  @Input() name  : string;
  @ViewChild('heading', {static:true}) header : ElementRef;

  ServerElementComponent(){
    console.log('constructor called');
  }

  // ngOnChanges(changes : SimpleChanges){
  ngOnChanges(changes : SimpleChanges){
      console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit called');
    console.log(">>> : "+this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log(">>> : "+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

}
