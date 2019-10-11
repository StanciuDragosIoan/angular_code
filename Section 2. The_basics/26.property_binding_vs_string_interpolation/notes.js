/*
    if we want to display the allowNewServer property,
    we can do so with string interpolation:

        <p> {{ allowNewServer }}</p>

        however, we can also use property binding in this specific case

        <p [innerText]="allowNewServer"></p>

        if we want to output something ==> use string interpolation

        if we want to change some property, use property binding



        # note -> DO NOT MIX property binding and string interpolation

        CANNOT DO:  [disabled]="{{allowNewServer}}"

        DO :   [disabled]="allowNewServer" instead (between the "" we must use TypeScript code)
*/