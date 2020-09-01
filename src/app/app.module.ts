import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/home-page/nav-bar/nav-bar.component';
import { WallPostComponent } from './components/home-page/wall-post/wall-post.component';
import { FriendsSectionComponent } from './components/home-page/friends-section/friends-section.component';
import { AboutusSectionComponent } from './components/home-page/aboutus-section/aboutus-section.component';
import {RouterModule} from '@angular/router';
import { HomeParentComponent } from './components/home-page/home-parent/home-parent.component';
import { QuestionComponent } from './components/home-page/question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WallPostComponent,
    FriendsSectionComponent,
    AboutusSectionComponent,
    HomeParentComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:HomeParentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
