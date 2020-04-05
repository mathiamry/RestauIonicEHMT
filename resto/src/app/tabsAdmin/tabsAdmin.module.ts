import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsAdminPageRoutingModule } from './tabsAdmin-routing.module';

import { TabsAdminPage } from './tabsAdmin.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsAdminPageRoutingModule
  ],
  declarations: [TabsAdminPage]
})
export class TabsAdminPageModule {}
