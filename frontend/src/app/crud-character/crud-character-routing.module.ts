import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudCharacterPage } from './crud-character.page';

const routes: Routes = [
  {
    path: '',
    component: CrudCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudCharacterPageRoutingModule {}
