import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudCharacterPageRoutingModule } from './crud-character-routing.module';

import { CrudCharacterPage } from './crud-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudCharacterPageRoutingModule
  ],
  declarations: [CrudCharacterPage]
})
export class CrudCharacterPageModule {}
