/*
    open and run app in folder 5


        the server 'serves' the index.html from the 'src' directory (and that
        loads the app compponent template)

        in the body of index.html we have only the app-root tag (that's the root component)

        in the src code of the index.html in the 'src' folder we have dynamic scripts added by the cli
        they start/run the app

        the first file being executed is the main.ts file (it adds basic angular dependencies and bootstraps the app)
            imports core dependencies (first 2 imports)
            imports app.module.ts from the 'app' directory in src
            imports environment
            passes the AppModule class (of the app.module.ts file) to the bootstrapModule() method


        app.module.ts references the AppComponent (in the bootstrap[] array)


        basic sequence: main.ts gets started -> bootstraps (loads app.module.ts) -> in app.module.ts we reference
        the app component -> angulars handles app root component to index.html and can render the app in the browser

*/