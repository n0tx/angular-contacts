import { Component, signal, inject, resource } from "@angular/core";
import { Contact } from "../../model/contact";
import { MatListModule } from "@angular/material/list";
import { ApiService } from "../../services/api.service";

@Component({
    selector: "app-contacts-list",
    imports: [MatListModule],
    templateUrl: "./contacts-list.html",
    styleUrl: "./contacts-list.css"
})
export class ContactsList {
    contactsListMessage = signal("contacts-list works!");
    contactsHarcoded = signal<Array<Contact>>([
        {
            id: "1",
            name: "Riki",
            email: "riki@mail.com",
            phone: "1111111"
        },
        {
            id: "2",
            name: "Candra",
            email: "candra@mail.com",
            phone: "2222222"
        }
    ]);
    apiService = inject(ApiService);
    contactsResource = resource({
        loader: () => this.apiService.getContacts()
    });
}
