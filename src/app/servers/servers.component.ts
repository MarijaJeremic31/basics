import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "There was no new servers yet";
  serverCreated: boolean = false;
  newServerName: string = 'name-placeholder';
  servers = ['TestServer', 'TestServer2', 'TestServer3','TestServer4'];

  constructor() {
setTimeout(() => {
  this.allowNewServer = true;
},2000);

  }

  ngOnInit() {
  }
  onAddNewServer(){
    this.serverCreationStatus = 'New server has been created';
    this.serverCreated = true;

  }
  onUpdateServerName($event) {
    this.newServerName = $event.target.value;
    /*alert($event.target.value);*/
    /*console.log($event)*/
  }


}
