import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PutStudioPageRoutingModule } from './put-studio-routing.module';

import { PutStudioPage } from './put-studio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PutStudioPageRoutingModule
  ],
  declarations: [PutStudioPage]
})
export class PutStudioPageModule {}
