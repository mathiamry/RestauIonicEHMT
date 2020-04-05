import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tabs",
  templateUrl: "tabsUser.page.html",
  styleUrls: ["tabsUser.page.scss"]
})
export class TabsUserPage {
  constructor(private route: Router) {}
  logout(): void {
    window.localStorage.removeItem("token");
    this.route.navigateByUrl("login");
  }
}
