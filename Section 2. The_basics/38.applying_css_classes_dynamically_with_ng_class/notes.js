/*
    ngclass allows us to dynamically add/remove classes

    added a class in the styles array in the server component:

      styles: [`

    .online {
        color: white;
    }

        `]

    added an ngClass directive and perfomed property binding on the class:

    <p [ngStyle]="{backgroundColor: getColor()}" [ngClass]="{online: serverStatus ===
    'online'}">Server with the ID {{ serverId }} is
    {{ getServerStatus() }}</p>

    *class added only if serverStatus is 'online'


*/