import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',//element selector
  //selector: '[app-servers]',//attribute selector
  selector: '.app-servers',//class selector
  templateUrl: './servers.component.html',
  //template: `
  //  <app-server></app-server>
  //  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  showSecret = false;
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Testservers';
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];
  secrets = [];
  username = '';
  log = [];

  constructor() {
    //function() {}; Below syntax is similar to this
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus= 'Server got created! Name is '+this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName= (<HTMLInputElement>event.target).value;
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length +1);
  }
}
