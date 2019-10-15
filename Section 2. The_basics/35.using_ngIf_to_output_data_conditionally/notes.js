/*
 ngIf is used with *

 <p *ngIf>test</p>

 ngIf is a a structural directive (it either adds or remove something from the DOM
 so that's why we use it with *)

 added a serverCreated property in the servers component and set it to false

 set the serverCreated to true in the onCreateServer method

 added a paragraph with ngIf in the template

 set ngIf to display only if serverCreetd = true:

 <p *ngIf="serverCreated">Server was created. Server name is {{ serverName }}</p>
*/