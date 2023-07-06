import { Component, ContentChild, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  // @Input let us to bind a property in oour component from an other component
  @Input('srvElement') element: { type: string, name: string, content: string }
  @Input() name  : string;
  @ViewChild('heading', {static:true}) header : ElementRef ;
  // @ContentChild : Accès à un propiété d'un autre composant, 
  // Transmission rendue possible par l'utilisation de la référence "ng-content" de ce composant "server-element"
  //  dans le composant contenant la référence "app"
  @ContentChild('contentParagraph', {static:true}) paragraph : ElementRef ;

  ServerElementComponent(){
    console.log('constructor called');
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit called');
    console.log(">>> : "+this.header.nativeElement.textContent);
    console.log(">>> : "+this.paragraph.nativeElement.textContent);

  }
  
  ngDoCheck(){
    console.log('ngDoCheck called');
  }
  
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log(">>> : "+this.paragraph.nativeElement.textContent);
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
