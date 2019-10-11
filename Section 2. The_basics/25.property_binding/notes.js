/*
    property binding = can be used intercahngeably with string interpolation

    defined a property in the servers  component:

         allowNewServer = false;

    defined a method in the constructor:

        constructor() {
            setTimeout(() => {
            this.allowNewServer = true;
            }, 2000);
        }

    made a binding in the template on the disabled attribute:

        <button class="btn btn-primary" [disabled]="!allowNewServer">Add new Server</button>

            ## note the [disabled] attribute is being bint to the allowNewServer property
            (which is negated so that while allowNewServer is false, the button remains disabled)
*/