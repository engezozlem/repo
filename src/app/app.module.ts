import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //1.Adım
import { NavbarComponent } from './nav/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
 

const appRoutes : Routes = [

  //The routing phase of app
  {
    path : "navbar" , 
    component : NavbarComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule, //2.Adım
    HttpClientModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
