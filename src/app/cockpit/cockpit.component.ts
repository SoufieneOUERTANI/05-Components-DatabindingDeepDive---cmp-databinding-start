import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  newServerName = '';
  newServerContent = '';

  @Output() serverAddedEvent = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output() blueprintAddedEvent = new EventEmitter<{serverName : string, serverContent : string}>();

  onAddServer() {
    this.serverAddedEvent.emit({serverName : this.newServerName, serverContent : this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintAddedEvent.emit({serverName : this.newServerName, serverContent : this.newServerContent});
  }

}
