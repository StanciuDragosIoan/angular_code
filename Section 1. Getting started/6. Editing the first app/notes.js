/*
    app generated in the folder 5.





        #observations

            Angular allows us to mix static html with dynamic elements
            (put there through 'data binding')

            The title of the app in the app.component.html is taken as value {{titile}}
            from the app.component.ts
                                        title = 'my-first-app';

            The selector in the app.component.ts defines the 'custom tag' in the index.html
            file in the root
                                 selector: 'app-root'

                                 custom tag: <app-root></app-root>

            Angular replaces the <app-root> tag through dynamic scripts with the app content



        #what I did

            modified the app component.html (added a text input and a paragraph)

            added a name variable interpolated between {{}} in the paragraph

            added the ngModel directive as an attribute in the input [(ngModel)]="name"

            defined the name poperty in the app.component.ts  -> name = 'test';

            imported the FormsModule in app.module.ts and added it to the 'imports' array

                now we made a binding between the input in the template and the value
                displayed in the paragraph
*/