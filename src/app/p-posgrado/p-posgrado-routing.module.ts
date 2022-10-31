import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PPosgradoPage } from './p-posgrado.page';

const routes: Routes = [
  {
    path: '',
    component: PPosgradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PPosgradoPageRoutingModule {}
