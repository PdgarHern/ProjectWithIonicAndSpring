import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutCharacterPage } from './put-character.page';

const routes: Routes = [
  {
    path: '',
    component: PutCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutCharacterPageRoutingModule {}
