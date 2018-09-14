import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { homeRouter } from './home.router';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ homeRouter ]
})

export class HomeModule {}
