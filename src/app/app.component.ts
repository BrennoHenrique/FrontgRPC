import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthUserModel, AuthUserRequest } from './protos/Auth_pb';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  authUser$!: Observable<AuthUserModel.AsObject | undefined>;

  constructor(
    readonly authService: AuthService
  ) { }

  login(form: NgForm) {
    if (form.valid) {
      const request = new AuthUserRequest();

      request.setEmail(form.value.userEmail);

      this.authUser$ = this.authService.authUser(request);
    }
  }

}
