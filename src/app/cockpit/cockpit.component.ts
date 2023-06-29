import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  // newServerName = '';
  newServerContent = '';

  @Output() serverAddedEvent = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output('bpCreated') blueprintAddedEvent = new EventEmitter<{serverName : string, serverContent : string}>();

  onAddServer(serverNameInput) {
    this.serverAddedEvent.emit({serverName : serverNameInput.value , serverContent : this.newServerContent});
  }

  onAddBlueprint(serverNameInputValue) {
    this.blueprintAddedEvent.emit({serverName : serverNameInputValue, serverContent : this.newServerContent});
  }

}
