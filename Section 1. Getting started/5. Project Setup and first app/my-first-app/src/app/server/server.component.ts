import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`

    .online {
        color: white;
    }
        `]
})

export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    stamps = [];
    serverDescription = 'random server description to toggle';
    descriptionShow = false;
    style = false;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    toggleText() {

        const stamp = new Date();
        this.stamps.push(stamp);
        console.log(this.stamps);
        this.descriptionShow === false ? this.descriptionShow = true : this.descriptionShow = false;
    }
}