import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('newServerElementEvent') serverEventEmitter = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output('newBluePrintElementEvent') bluePrintEventEmitter = new EventEmitter<{serverName : string, serverContent : string}>();

  newServerName = '';
  // newServerContent = '';
  @ViewChild( 'serverContent', {static:true}) serverContentInput : ElementRef; 

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverEventEmitter.emit({serverName :  this.newServerName, serverContent : this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverContentValue : string) {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.bluePrintEventEmitter.emit({serverName :  this.newServerName, serverContent : serverContentValue});
  }

}
