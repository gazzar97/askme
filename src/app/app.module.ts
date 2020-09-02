import { HomeParentComponent } from './pages/home-parent/home-parent.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/home-page/nav-bar/nav-bar.component';
import { WallPostComponent } from './components/home-page/wall-post/wall-post.component';
import { FriendsSectionComponent } from './components/home-page/friends-section/friends-section.component';
import { AboutusSectionComponent } from './components/home-page/aboutus-section/aboutus-section.component';
import {RouterModule} from '@angular/router';
import { QuestionComponent } from './components/home-page/question/question.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileParentComponent } from './pages/profile-parent/profile-parent.component';
import { AboutmeComponent } from './components/profile-page/aboutme/aboutme.component';
import { ProfileStatsComponent } from './components/profile-page/profile-stats/profile-stats.component';
import { ProfileBoxHeaderComponent } from './components/profile-page/profile-box-header/profile-box-header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WallPostComponent,
    FriendsSectionComponent,
    AboutusSectionComponent,
    HomeParentComponent,
    QuestionComponent,
    LoginComponent,
    SignupComponent,
    ProfileParentComponent,
    AboutmeComponent,
    ProfileStatsComponent,
    ProfileBoxHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:HomeParentComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'profile',component:ProfileParentComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
