/*
    performed assignment:

    created button in server component.html

    <button class="btn btn-secondary mb-3" (click)="toggleText()">Display Details</button>

    created function toggleText();

     toggleText() {
        const stamp = new Date();
        this.stamps.push(stamp);
        console.log(this.stamps);
        this.descriptionShow === false ? this.descriptionShow = true : this.descriptionShow = false;
    }

    added ul with li:

   <ul>
    <li *ngFor="let stamp of stamps; let i= index"
        [ngStyle]="{'backgroundColor': (i+1> 4) ? 'blue' : 'white'}"
        [ngClass]="{ 'text-light': i > 3 }">
        {{stamp}}
    </li>
</ul>

    note the ngFor (to display all stamps in an li)

    note how the ngStyle logic is pefromed and how the let i = index statement binds the index in the ngFor directive

    note the ngClass that makes text white on blue background

*/