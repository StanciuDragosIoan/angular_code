/*
    saw how we can replace the templateUrl property in the component's decorator
        with a template property in which we can define inline styles (instead of having a css file):
            @Component({
                selector: 'app-servers',

                template: `
                            <app-server></app-server>
                            <app-server></app-server>

                          `,

                styleUrls: ['./servers.component.css']
            })
*/