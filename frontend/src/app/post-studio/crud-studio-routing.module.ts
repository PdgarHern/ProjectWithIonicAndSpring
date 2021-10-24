import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudStudioPage } from './crud-studio.page';

const routes: Routes = [
  {
    path: '',
    component: CrudStudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudStudioPageRoutingModule {}
