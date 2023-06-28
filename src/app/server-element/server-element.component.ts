import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  // @Input let us to bind a property in oour component from an other component
  @Input('srvElement') element: { type: string, name: string, content: string }
}
