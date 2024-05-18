import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SpecialityComponent } from './pages/speciality/speciality.component';
import { SpecialityDetailComponent } from './pages/speciality-detail/speciality-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { AddComponent } from './pages/add/add.component';
import { ManageComponent } from './pages/manage/manage.component';
import { ViewComponent } from './pages/view/view.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'book',
    component:BookComponent
  },
  {
    path:'success',
    component:SuccessComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'manage',
    component:ManageComponent
  },
  {
    path:'speciality',
    component:SpecialityComponent
  },
  {
    path:'view',
    component:ViewComponent
  },
  {
    path:'speciality/:id',
    component:SpecialityDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
