import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabsUser/tabsUser.module").then(m => m.TabsUserPageModule)
  },
  {
    path: "",
    loadChildren: () => import("./tabsAdmin/tabsAdmin.module").then(m => m.TabsAdminPageModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./compte/login/login.module").then(m => m.LoginPageModule)
  },
  {


    path: "plat",
    loadChildren: () =>
      import("./plats/plats.module").then(m => m.Tab2PageModule)
  },

  {
    path: "ajouter",
    loadChildren: () =>
      import("./plats/ajouter/ajouter.module").then(m => m.AjouterPageModule)
  },

  {
    path: "modifier",
    loadChildren: () =>
      import("./plats/modifier/modifier.module").then(m => m.ModifierPageModule)
  },


  {
    path: "commande",
    loadChildren: () =>
      import("./commande/commande.module").then(m => m.CommandePageModule)
  },

  {
    path: "passerCommande",
    loadChildren: () =>
      import("./commande/passerCommande/passerCommande.module").then(m => m.PasserCommandePageModule)
  },

  
  {
    path: "modifier",
    loadChildren: () =>
      import("./compte/modifier/modifier.module").then(
        m => m.ModifierPageModule
      )
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then(m => m.RegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
