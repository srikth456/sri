import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  isSubmitted: Boolean = false;
  result: any = null;
  constructor(private frmBuilder: FormBuilder) { }
  ngOnInit() {
    this.loginform = this.frmBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: ['', [Validators.required]]
    });
  }
  get username() { return this.loginform.get('username'); }
  get password() { return this.loginform.get('password'); }
  submit() {
    this.isSubmitted = true;
    if (!this.loginform.valid) {
      return;
    }
    // Code to save the data
    // userService.Save(this.register.value);
    this.result = this.loginform.value;
    setTimeout(() => {
      this.result = null;
      this.reset();
    }, 2000);
  }

  reset() {
    this.isSubmitted = false;
    this.loginform.reset();
  }

}
