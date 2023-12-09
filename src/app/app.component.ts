import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type : 'server', name :'testServer', content:'Just a test!'},
    {type : 'server', name :'testServer', content:'Just a test!'}
  ];

  addNewServer(event : {serverName : string, serverContent : string}){
    this.serverElements.push({type : 'server' , name : event.serverName,  content : event.serverContent });
  }

  addNewBlueprint(event : {serverName : string, serverContent : string}){
    this.serverElements.push({type : 'blueprint' , name : event.serverName,  content : event.serverContent });
  }
}
