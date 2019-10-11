/*
    saw how we can select by attribute instead of selector
          selector: '[app-servers]', instead of selector: app-servers,

          however we must replace the <app-servers> custom tag in the app component template
          with a div with the app-servers attribute -> <div app-servers></div>

          we can also select by class -> .app-servers and reference with <div class="app-servers">

          we CANNOT select by id or by pseudo selectors like hover
*/