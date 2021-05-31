import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-forgot-psw',
  templateUrl: './forgot-psw.component.html',
  styleUrls: ['./forgot-psw.component.css']
})
export class ForgotPSWComponent implements OnInit {
  public model: User;
  constructor(private userService: UserService, private cookieService: CookieService, private router: Router, private appComponent: AppComponent) {
    this.model = new User();
  }
  
  ngOnInit(): void {
  }
  
  OnForgot() {
    this.userService.forgotPassword(this.model).subscribe(participant => {
      alert("Your Password has been reset");
      this.router.navigateByUrl('/logind');
    
    }, error => {
      console.log(this.model.emailUsername)
      console.log(error.status);
    });
  }

}
