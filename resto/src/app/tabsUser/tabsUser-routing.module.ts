import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsUserPage } from "./tabsUser.page";

const routes: Routes = [
  {
    path: "tabsUser",
    component: TabsUserPage,
    
    children: [
      {
        path: "menu",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../menu/menu.module").then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: "plats",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../plats/plats.module").then(m => m.Tab2PageModule)
          },
          {
            path: "ajouter",
            loadChildren: () =>
              import("../plats/ajouter/ajouter.module").then(
                m => m.AjouterPageModule
              )
          },
          {
            path: "modifier/:id",
            loadChildren: () =>
              import("../plats/modifier/modifier.module").then(
                m => m.ModifierPageModule
              )
          }
        ]
      },
      
      {
        path: "commande",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../commande/commande.module").then(m => m.CommandePageModule)
          },
          {
            path: "passerCommande",
            loadChildren: () =>
              import("../commande/passerCommande/passerCommande.module").then(
                m => m.PasserCommandePageModule
              )
          },
          
        ]
      },
          
      {
        path: "compte",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../compte/compte.module").then(m => m.Tab3PageModule)
          },
          {
            path: "login",
            loadChildren: () =>
              import("../compte/login/login.module").then(
                m => m.LoginPageModule
              )
          },
          {
            path: "modifier/:id",
            loadChildren: () =>
              import("../compte/modifier/modifier.module").then(
                m => m.ModifierPageModule
              )
          }
        ]
      },
      
      
      {
        path: "",
        redirectTo: "/tabsUser/menu",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabsUser/menu",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsUserPageRoutingModule {}
