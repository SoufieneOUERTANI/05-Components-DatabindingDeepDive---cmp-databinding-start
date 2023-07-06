import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // Cette propriété est celle par défaut dont la visibilité se resteient au composant
  // encapsulation:ViewEncapsulation.Emulated

  // ??? 
  // encapsulation:ViewEncapsulation.ShadowDom
  
  // Cette propiété permet de déclarer une visibilité qui s'étend sur toute l'application
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{type : 'server', name :'testServer', content:'Just a test!' }];

  onServerAdded(serverData : {serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverName
    });
  }

  onBlueprintAdded(serverData : {serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverName
    });
  }

  onChangeFirst() {
    this.serverElements[0].name  = 'changed';
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }

}
