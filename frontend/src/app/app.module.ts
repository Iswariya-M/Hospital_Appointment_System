import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './pages/nav/nav.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BookComponent } from './pages/book/book.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SpecialityComponent } from './pages/speciality/speciality.component';
import { SpecialityDetailComponent } from './pages/speciality-detail/speciality-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { AddComponent } from './pages/add/add.component';
import { ManageComponent } from './pages/manage/manage.component';
import { ViewComponent } from './pages/view/view.component';
import { SuccessComponent } from './pages/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    BookComponent,
    AdminComponent,
    SpecialityComponent,
    SpecialityDetailComponent,
    AboutComponent,
    AddComponent,
    ManageComponent,
    ViewComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
