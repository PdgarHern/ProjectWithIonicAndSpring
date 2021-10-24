import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudStudioPageRoutingModule } from './crud-studio-routing.module';

import { CrudStudioPage } from './crud-studio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudStudioPageRoutingModule
  ],
  declarations: [CrudStudioPage]
})
export class CrudStudioPageModule {}
