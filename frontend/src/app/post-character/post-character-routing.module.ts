import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostCharacterPage } from './post-character.page';

const routes: Routes = [
  {
    path: '',
    component: PostCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostCharacterPageRoutingModule {}
