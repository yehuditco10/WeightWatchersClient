import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, MinLengthValidator } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string = ""

  constructor(private loginService: LoginService,
    private router: Router,
    private patientService: LoginService) { }
    loginForm = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl('')
  });
  ngOnInit(): void {
  }
  onSubmit() {
    debugger;
    this.message = "הבקשה נשלחת...";
    this.loginService.login(this.loginForm.controls.UserName.value,
      this.loginForm.controls.Password.value).subscribe(
        success => {
          debugger
          this.message = "!זיהוי הצליח"
            // sessionStorage.setItem("currentPatient", success.id),
            // this.patientService.patientLocations = success.locations,
            // this.router.navigate(['/locations'])
        },
        error => { console.log(error), this.message = error.error.message }
      )
  }
  goRegister() {
    this.router.navigate(['/register']);
  }

}
