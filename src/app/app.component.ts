import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'servername', content: 'server content' }];
  // @ViewChild(cockpitComponent, { static: true })>>to get access to cockpitcomponent


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBluePrintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
