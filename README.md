# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## commits 

    ### 66. Bind to Custom Property - [property] + @Input
      <!-- 
        With : 
        - Defining the binded data struture by "@Input() element" in the "app-server-element" ts component
        - Binding the html by "[element]='serverElement'" in the current html component
        - Defining the content of the serverElements elements in the current ts component 
        Each serverElement of the current component can be hanled by "app-server-element" component     
      -->
      <app-server-element *ngFor="let serverElement of serverElements"
      [element]='serverElement'></app-server-element>

    ### 68. Binding to Custom Events
      @Output() serverAddedEvent = new EventEmitter<{serverName : string, serverContent : string}>();
      @Output() blueprintAddedEvent = new EventEmitter<{serverName : string, serverContent : string}>();

      onAddServer() {
        this.serverAddedEvent.emit({serverName : this.newServerName, serverContent : this.newServerContent});
      }

      onAddBlueprint() {
        this.blueprintAddedEvent.emit({serverName : this.newServerName, serverContent : this.newServerContent});
      }



      (serverAddedEvent)='onServerAdded($event)'
      (blueprintAddedEvent)='onBlueprintAdded($event)'


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
