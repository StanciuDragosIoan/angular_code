/*
    used the ngFor directive to output a 'growing list' of servers whenever a new 1 is created


    we added the list in the servers.component.html

    added a  servers property in the servers.component.ts file

    added 2 servers strings in it

    in the onCreateServer, pushed the newly created server onto the array

    added the ngFor structural directive with a *

    <app-server *ngFor="let server of servers"></app-server> (loops
    through servers array and displays each of them in a server component)
*/