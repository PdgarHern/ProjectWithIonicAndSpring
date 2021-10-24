import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostCharacterPageRoutingModule } from './post-character-routing.module';

import { PostCharacterPage } from './post-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostCharacterPageRoutingModule
  ],
  declarations: [PostCharacterPage]
})
export class PostCharacterPageModule {}
