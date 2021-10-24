import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'put/:id_anime',
    loadChildren: () => import('./put/put.module').then( m => m.PutPageModule)
  },
  {
    path: 'crud-studio',
    loadChildren: () => import('./post-studio/crud-studio.module').then( m => m.CrudStudioPageModule)
  },
  {
    path: 'put-studio/:id_studio',
    loadChildren: () => import('./put-studio/put-studio.module').then( m => m.PutStudioPageModule)
  },
  {
    path: 'crud-character/:id_anime',
    loadChildren: () => import('./crud-character/crud-character.module').then( m => m.CrudCharacterPageModule)
  },
  {
    path: 'post-character/:id_anime',
    loadChildren: () => import('./post-character/post-character.module').then( m => m.PostCharacterPageModule)
  },
  {
    path: 'put-character/:id_anime/:id_character',
    loadChildren: () => import('./put-character/put-character.module').then( m => m.PutCharacterPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
