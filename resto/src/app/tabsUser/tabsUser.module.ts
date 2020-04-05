import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsUserPageRoutingModule } from './tabsUser-routing.module';

import { TabsUserPage } from './tabsUser.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsUserPageRoutingModule
  ],
  declarations: [TabsUserPage]
})
export class TabsUserPageModule {}
