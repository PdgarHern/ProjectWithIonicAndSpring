import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutCharacterPageRoutingModule } from './put-character-routing.module';

import { PutCharacterPage } from './put-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutCharacterPageRoutingModule
  ],
  declarations: [PutCharacterPage]
})
export class PutCharacterPageModule {}
