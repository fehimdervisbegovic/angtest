import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: "event-thumbnail",
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>  
        <div>{{event.id}}</div>
        <div>{{event.price}}</div>  
        <button class="btn btn-sm btn-danger" (click)="handleClickMe()">Please click me...</button>    
    </div>
    `,
})
export class EventThumbnailComponent {   
    @Input() event: any;

    @Output() eventClick = new EventEmitter();

    handleClickMe() {        
        this.eventClick.emit("Selammmm");
    };
}