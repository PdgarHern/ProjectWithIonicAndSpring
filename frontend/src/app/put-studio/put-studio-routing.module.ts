import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutStudioPage } from './put-studio.page';

const routes: Routes = [
  {
    path: '',
    component: PutStudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutStudioPageRoutingModule {}
