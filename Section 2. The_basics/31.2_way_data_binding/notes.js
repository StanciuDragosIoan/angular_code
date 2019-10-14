/*
    with 2 way data binding combines property binding and event binding

    2way data binding binds both the component property (in the .ts file) and the
    value displayed in the template (no matter whaich one of them I modify )

    e.g. if I modify the serverName in the .ts file before typing in the input, the input gets
    pre-populated and the value of serverName displayed (so whether I modify in the .ts file
    or in the template, the value gets changed, whereas before, it would not get changed in both places)


    added FormsModule in the app.module.ts file (import + added it to the imports array)

    replaced the original input:

    <input type="text" class="form-control mb-5"
    (input)="onUpdateServerName($event)">

    with:

    <input type="text" class="form-control mb-5" [(ngModel)]="serverName">


    the ngModel directive performs 2way binding on the input field and the .ts component



*/