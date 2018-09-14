import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { loginRouter } from './login.router';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ CommonModule, loginRouter, FormsModule, ReactiveFormsModule ]
})

export class LoginModule {}
