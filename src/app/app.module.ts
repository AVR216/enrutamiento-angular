import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailComponent } from './components/courses-detail/courses-detail.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/:course', component: CoursesDetailComponent},
  {
    path: 'contact', 
    component: ContactComponent,
    children: [
      {
        path: 'info',
        component: ContactInfoComponent
      },
      {
        path: 'details', 
        component: ContactDetailComponent
      },
      {
        path: '**',
        redirectTo: 'info',
        pathMatch: 'full'
      }
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CoursesComponent,
    CoursesDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
