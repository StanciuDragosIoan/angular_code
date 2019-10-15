/*
    added an if statement in the ngIf and an ng-template element under the paragraph
    in the servers.component.html:

    <ng-template #noServer>
    <p>
        No server was created
    </p>
    </ng-template>

    the 'No server was created' paragraph is show only if noServer;

    uf serverCreated = true -> display Server was created...
    else
    display No server (by the #noServer marker)

    an alternative to this would simply be to use ngIf again
*/