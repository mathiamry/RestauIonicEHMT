import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tabsAdmin",
  templateUrl: "tabsAdmin.page.html",
  styleUrls: ["tabsAdmin.page.scss"]
})
export class TabsAdminPage {
  constructor(private route: Router) {}
  logout(): void {
    window.localStorage.removeItem("token");
    this.route.navigateByUrl("login");
  }
}
