/*
    we'll now look at attribute directives (unlike structural directives
    they only style the element they are attributed to and they don'd add/remove elements
    they only change them)

    added an ngStyle directive and bint it on a property with []

    <p [ngStyle]="{backgroundColor: getColor()}">Server with the ID {{ serverId }} is
    {{ getServerStatus() }}</p>

    *note the property binding via []

    created a getColor() method in the serverComponent

    now the background is changed dynamically based on the server status

*/