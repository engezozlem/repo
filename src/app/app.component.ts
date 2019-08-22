import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ["Angular","React","Vue"];
  topicHasError = true;
  submitted = false ;
  errorMsg = "";
  //Adım 6 User modeli için bir intance oluştur
  userModel = new User(
    '',
    '',
    5325634152,
    'default',
    '',
    false);


    constructor(private _enrollmentService : EnrollmentService){}
    validateTopic(value){
      if(value == "default"){
        this.topicHasError=true;
      }
      else{
        this.topicHasError=false;
      }
    }
  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log("Success !",data),
      //error => console.log("Error !",error)
      error => this.errorMsg =error.statusText
    )
  }
}
