import { Component } from '@angular/core';

@Component({
    selector: "events-list",
    templateUrl: "app/events/events-list.component.html",
})
export class EventsListComponent {
    events = [
        {
        id: 1,
        name: "Angular Connect",
        price: 234.67
        },
        {
        id: 2,
        name: "Angular Connect 222",
        price: 876.67
        }
    ];


    handleEventClick(e) {
        console.log(e);
    };
}