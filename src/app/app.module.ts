import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './login/form/form.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  FormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
