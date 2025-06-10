import { Component, signal } from "@angular/core";

@Component({
    selector: "app-contacts-list",
    imports: [],
    templateUrl: "./contacts-list.html",
    styleUrl: "./contacts-list.css"
})
export class ContactsList {
    contactsListMessage = signal("contacts-list works!");
}
