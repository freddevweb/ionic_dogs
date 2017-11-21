import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubBreedsPage } from './sub-breeds';


@NgModule({
  declarations: [
    SubBreedsPage,
  ],
  imports: [
	IonicPageModule.forChild(SubBreedsPage),
  ],
})
export class SubBreedsPageModule {}
