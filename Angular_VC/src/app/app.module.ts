import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './my-components/home/home.component';
import { AboutComponent } from './my-components/about/about.component';
import { LoginComponent } from './my-components/login/login.component';
import { RegisterComponent } from './my-components/register/register.component';
import { UserComponent } from './my-components/user/user.component';
import { UserListComponent } from './my-components/user-list/user-list.component';
import { AddUserComponent } from './my-components/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
