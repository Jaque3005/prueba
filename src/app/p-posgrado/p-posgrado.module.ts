import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PPosgradoPageRoutingModule } from './p-posgrado-routing.module';

import { PPosgradoPage } from './p-posgrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PPosgradoPageRoutingModule
  ],
  declarations: [PPosgradoPage]
})
export class PPosgradoPageModule {}
