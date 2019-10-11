/*
    created a property in the servers component:

    serverCreationStatus = 'No Server was created!';


    created a method inside the servers component:

    onCreateServer() {
        this.serverCreationStatus = 'Server was created';
    }


    added click event binding on the servers component template

        <button class="btn btn-primary" [disabled]="!allowNewServer"
    (click)="onCreateServer()">Add new Server</button>
*/