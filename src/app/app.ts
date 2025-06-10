import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "app-root",
    imports: [
      RouterOutlet, 
      MatSlideToggleModule, 
      MatToolbarModule,
      MatIconModule
    ],
    templateUrl: "./app.html",
    styleUrl: "./app.css"
})
export class App {
    protected title = "My Contacts";
}
