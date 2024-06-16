import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
  CommonModule,
  RouterModule,
  SharedModule
  ],
  exports:[
    FooterComponent
  ]
})
export class CoreModule { }
