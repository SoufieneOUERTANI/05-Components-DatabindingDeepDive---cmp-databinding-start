import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInputRef : ElementRef;

  @Output() serverAddedEvent = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output('bpCreated') blueprintAddedEvent = new EventEmitter<{serverName : string, serverContent : string}>();

  onAddServer(serverNameInput) {
    this.serverAddedEvent.emit({serverName : serverNameInput.value , serverContent : this.serverContentInputRef.nativeElement.value});
  }

  onAddBlueprint(serverNameInputValue) {
    this.blueprintAddedEvent.emit({serverName : serverNameInputValue, serverContent : this.serverContentInputRef.nativeElement.value});
  }

}
